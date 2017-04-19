/*
 * Created by Linh Ngo in 17/04/2017
 */
var path = require('path')
var express = require('express')
var expressVue = require('express-vue')
var app = express();

app.use(express.static(__dirname + '/public'));
app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', path.join(__dirname, '/views'));
app.set('vue', {
    defaultLayout: 'layout'
});

const allThings = require('./model/thing.js').allthings;

const selectItems = [
    { name: '-Select Option-', type: 0 },
    { name: 'thing', type: 1 },
    { name: 'animal', type: 2 },
    { name: 'all', type: 3 }
];

var exampleMixin = {
    methods: {
        showImg: function (type) {
            //console.log(this.images);
            let selectedOpt = parseInt(type);
            let result = [];
            if (selectedOpt === 0) {
                result = [];
            } else if (selectedOpt === 1) {
                result = this.images.filter(thing => thing.type === 1);
            } else if (selectedOpt === 2) {
                result = this.images.filter(thing => thing.type === 2);
            } else if (selectedOpt === 3) {
                result = this.images; 
            } else {
                result = 'You selected invalid type!'
            }
            return result;
        }
    }
}
//
app.get('/', (req, res) => {
    let scope = {
        data: {
            title: 'Demo Vue',
            selected: 0,
            selectItems: selectItems,
            images: allThings
        },
        vue: {
            head: {
                title: 'Express Vue',
                meta: [
                    { property: 'og:title', content: 'Express Vue' },
                    { name: 'twitter:title', content: 'Express Vue' }
                ]
            },
            mixins: [exampleMixin]
        }
    }
    res.render('index', scope);
})

app.listen(3000, () => {
    console.log('Express server listening on port 3000');
});

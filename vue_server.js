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
    { name: 'all', type: 0 },
    { name: 'thing', type: 1 },
    { name: 'animal', type: 2 }
];
//TODO: Ứng dụng chưa chạy, cô Linh kiểm thử lại nhé
//Cái này chuyển lên server sẽ tốt hơn
var exampleMixin = {
    methods: {
        showImg: function (type) {
            let result = [];
            let selectedOpt = parseInt(type);
            switch (selectedOpt) {
                case 0:
                    result = [];
                    break;
                case 1:
                    result = things.filter(thing => thing.type === 1);
                    break;
                case 2:
                    result = things.filter(thing => thing.type === 2);
                    break;
                case 3:
                    result = things;
                    break;
                default:
                    result = 'You selected invalid type!';
                    break;
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
            mixins: [exampleMixin]
        }
    }
    res.render('index', scope);
})

app.listen(3000, () => {
    console.log('Express server listening on port 3000');
});

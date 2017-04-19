/*
 * Created by Linh Ngo in 17/04/2017
 */
var path = require('path')
var express = require('express')
var expressVue = require('express-vue')
var app = express();

app.use('/public', express.static('public'))


app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', path.join(__dirname, '/views'));
app.set('vue', {
	defaultLayout: 'layout'
});

const allThings = require('./model/thing.js').allthings;


app.get('/', (req, res) => {
	res.render('index_axios');
})

app.listen(3000, () => {
	console.log('Express server listening on port 3000');
});

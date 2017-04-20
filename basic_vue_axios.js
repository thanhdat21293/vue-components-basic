/*
Ứng dụng đơn giản nhất sử dụng Vue + Axios
Tham khảo video ở đây
https://egghead.io/lessons/vue-make-a-request-to-an-api-with-axios-in-vue#/tab-code

Cần copy axios.min. vào /public/js
 */
const path = require('path')
const express = require('express')
const expressVue = require('express-vue')
const app = express()

app.use('/public', express.static('public'))


app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', path.join(__dirname, '/views'));
app.set('vue', {
	defaultLayout: 'layout'
});


app.get('/', (req, res) => {
	res.render('basic_axios');  //Sử dụng /view/basic_axios.vue
})

app.listen(3000, () => {
	console.log('Express server listening on port 3000');
});

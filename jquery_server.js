const express = require('express');
const app = express();
const path = require("path");

const allthings = require('./model/thing.js').allthings;
const getThing = require('./model/thing.js').getThing;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/public', express.static('public'))
app.set('view engine', 'html')

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/views/jQuery_client.html'));
});


app.post('/',function(req,res){
    let photo =[];
    let type = req.body.data;
    let data = getThing(type,allthings);

    for (var index = 0; index < data.length; index++) {
      let image = data[index].photo;
      photo.push(image);
    }
    console.log(photo);
    res.json(photo);
});


const server = require('http').Server(app);
server.listen(3000, function () {
    console.log('Running on port 3000!');
});

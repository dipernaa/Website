var bodyParser = require('body-parser');
var express = require('express');
//var request = require('request'); //Used for external http requests
//var mysql = require('mysql');
//var qr = require('qr-image');
var path = require('path');
var cors = require('cors');
//var fs = require('fs'); //Used to read local files
var app = express();

app.use(bodyParser.json());
app.use(cors());

app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));
//var filePath = path.join(__dirname, 'public/text_files/MegaCustomOSHASigns.csv'); //Filepath for fs to read from

/**
 * Displays the main page
 * @return main page of webapp
 */
app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(3000);
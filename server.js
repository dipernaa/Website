var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var express = require('express');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(favicon(__dirname + '/public/images/favicon.ico'));


app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));

/**
 * Displays the main page
 * @return main page of webapp
 */
app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
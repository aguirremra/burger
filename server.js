var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.set('port', (process.env.PORT || 5000));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controllers.js');

app.use('/', routes);

app.listen(app.get('port'), function(){
	console.log('Node app is running on port', app.get('port'));
})


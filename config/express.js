var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator')

module.exports = function(){
    var app = express();
	app.set('view engine', 'ejs');
	app.set('views', './app/views'); // o  caminho é a partir de app.js que sobe o express
	app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(expressValidator());
	return app;
};
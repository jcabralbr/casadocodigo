var express = require('express');
module.exports = function(){
    var app = express();
	app.set('view engine', 'ejs');
	app.set('views', './app/views'); // o  caminho é a partir de app.js que sobe o express
	return app;
};
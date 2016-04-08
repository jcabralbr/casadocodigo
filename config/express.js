var express = require('express');
var load = require('express-load');
 
module.exports = function(){
	var app = express();
	app.set('view engine', 'ejs');
	app.set('views', './app/views'); // o  caminho é a partir de app.js que sobe o express

	load('routes', {cwd: 'app'})
		.then('infra')
		.then('views')
	.into(app);

	return app;	
};
var app = require('express')();
app.set('view engine', 'ejs');
app.set('views', './app/views'); // o  caminho é a partir de app.js que sobe o express
	
module.exports = function(){
	return app;	
}

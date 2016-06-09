var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var porta = process.env.PORT || 3000;
app.set('io', io);

var rotasProduto = require('./app/routes/produtos')(app);
var rotasPromocoes = require('./app/routes/promocoes')(app);

app.use(function(req, res, next){
	res.status(404).render('erros/404');
	next();
});

app.use(function(error, req, res, next){
	// NODE_ENV=production nodemon app (para subir em production)
	if (process.env.NODE_ENV == 'production'){
		res.status(500).render('erros/500');
		return;
	}
	next(error);
});

http.listen(porta, function(){
	console.log('servidor rodando no heroku');
});
var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

var rotasProduto = require('./app/routes/produtos')(app);
var rotasPromocoes = require('./app/routes/promocoes')(app);

http.listen(3000, function(){
	console.log('servidor rodando');
});
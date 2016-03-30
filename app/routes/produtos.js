var connection = require('./../infra/connectionFactory');
var produtosBanco = require('./../infra/produtosBanco');

module.exports = function(app){

	app.get('/produtos', function(req, res){
		produtosBanco.lista(connection(), function(erros, resultados){
            res.render('produtos/lista', {lista:resultados});
        });
		connection.end();
	});
};

/*
module.exports = function(app){
    app.get('/produtos', function(req, res){
        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco(connection);

        produtosBanco.lista(function(erros, resultados){
            res.render('produtos/lista', {lista:resultados});
        });
        connection.end();
    });
};*/

/*module.exports = function(app){
	app.get('/produtos', function(req, res){

		var connection = app.infra.connectionFactory();

		connection.query('select * from livros', function(err, results){
			res.render('produtos/lista', {lista:results});

		});
		connection.end();
	});
}*/

 module.exports = function(app){
     app.get('/produtos', function(req, res){
        var produtosBanco = app.infra.produtosBanco;

        var callback = function(err, results){
            res.render('produtos/lista', {lista:results});
        };

        produtosBanco.lista(app, callback);
     });
 }

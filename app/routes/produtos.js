var connectionFactory = require('../infra/connectionFactory');
var produtosBanco = require('../infra/ProdutosBanco');

module.exports = function(app){
    app.get('/produtos', function(req, res){
        var connection = connectionFactory();

        produtosBanco().lista(connection, function(err, results){
            res.render('produtos/lista', {lista: results});
        });

        connection.end();
    });
};

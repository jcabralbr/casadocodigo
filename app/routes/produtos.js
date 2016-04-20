var connectionFactory = require('../infra/connectionFactory');
var ProdutosDao = require('../infra/ProdutosDao');

module.exports = function(app){
    app.get('/produtos', function(req, res){
        var connection = connectionFactory();
        ProdutosDao(connection).lista(function(err, results){
            res.render('produtos/lista', {lista: results});
        });
        connection.end();
    });
};
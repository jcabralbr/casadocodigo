var connectionFactory = require('../infra/connectionFactory');
var ProdutosDAO = require('../infra/ProdutosDAO');

module.exports = function(app){
    app.get('/produtos', function(req, res){
        var connection = connectionFactory();
        var produtosDAO = new ProdutosDAO(connection);
        produtosDAO.lista(function(err, results){
            res.format({
                html: function(){
                    res.render('produtos/lista', {lista: results});
                },
                json: function(){
                    res.json(results);
                }
            });
        });
        connection.end();
    });

    app.get('/produtos/form', function(req, res){
        res.render('produtos/form', {errosValidacao: {}, produto:{}});
    });

    app.post('/produtos', function(req, res){
        var produto = req.body;

        // validando form com express-validator
        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();
        var erros = req.validationErrors();
        if (erros){
            res.format({
                html: function(){
                    res.status(400).render('produtos/form', {errosValidacao: erros, produto: produto});
                },
                json: function(){
                    res.status(400).json(erros);
                }
            });
            return;
        }


        var connection = connectionFactory();
        var produtosDAO = new ProdutosDAO(connection);
        produtosDAO.salva(produto, function(erros, resultados){
            console.log(erros);
            res.redirect('/produtos');
        });
        connection.end();
    });
};
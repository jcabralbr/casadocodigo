var connectionFactory = require('../infra/connectionFactory');
var ProdutosDAO = require('../infra/ProdutosDAO');

module.exports = function(app){
    app.get('/promocoes/form', function(req, res){
        var connection = connectionFactory();
        var produtosDAO = new ProdutosDAO(connection);
        produtosDAO.lista(function(err, results){
            res.format({
                html: function(){
                    res.render('promocoes/form', {lista: results});
                },
                json: function(){
                    res.json(results);
                }
            });
        });
        connection.end();
    });

    app.post('/promocoes', function(req, res){
        var promocao = req.body;
        app.get('io').emit('novaPromocao', promocao);
        res.redirect('/promocoes/form');

        /*// validando form com express-validator
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
        connection.end();*/
    });
};
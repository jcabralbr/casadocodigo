/*function ProdutosBanco(connection){
 this._connection = connection;
 }

 ProdutosBanco.lista = function(callback) {
 this._connection.query('select * from produtos', callback);
 };

 module.exports = function(){
 return ProdutosBanco;
 }*/


module.exports = function (connection) {
    this.lista = function (callback) {
        connection.query('select * from livros', callback);
    };
    return this;
};



module.exports = function () {
    this.lista = function (connection, callback) {
        connection.query('select * from produtos', callback);
    };
    return this;
};

/*
 module.exports = function(){
 return function(connection){
 this.lista = function(callback) {
 connection.query('select * from produtos', callback);
 };
 return this;
 }
 };*/

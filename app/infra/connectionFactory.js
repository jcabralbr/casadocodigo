// factory method pattern	
var mysql = require('mysql');

// *********************************** 
// **  no trabalho nao tem password **
// ** em casa:
// ***********************************
var connnectMYSQL = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo_nodejs'
    });
};

// wrapper
module.exports = function () {
    return connnectMYSQL;
}
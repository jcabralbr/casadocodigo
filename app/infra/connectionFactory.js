// factory method pattern	
var mysql = require('mysql');

// ***********************************
// **  no trabalho nao tem password **
// ** em casa: root
// **
module.exports = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo_nodejs'
    });
}

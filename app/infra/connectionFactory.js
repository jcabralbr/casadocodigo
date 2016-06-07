// factory method pattern	
var mysql = require('mysql');

// ***********************************
// **  no trabalho nao tem password **
// ** em casa: root                 **
// ***********************************
module.exports = function () {
    if (!process.env.NODE_ENV){
        // development
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo_nodejs22'
        });
    }

    if (process.env.NODE_ENV == 'test'){
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo_nodejs_test'
        });
    }

};

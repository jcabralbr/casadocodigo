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
            database: 'casadocodigo_nodejs'
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

    if (process.env.NODE_ENV == 'production'){
        var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
        var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
        return mysql.createConnection({
            host: 'us-cdbr-iron-east-04.cleardb.net',
            user: 'b6747ab2a36157',
            password: 'ab29fd9e',
            database: 'heroku_fb4df8cbbb9b98a'
        });
    }

};

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
            host: grupos[3],
            user: grupos[1],
            password: grupos[3],
            database: grupos[4]
        });
    }
};
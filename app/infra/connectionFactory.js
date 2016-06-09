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
    /*
     https://toolbelt.heroku.com/
     executar wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh e instalar

     no terminal:
     heroku login
     heroku help
     heroku apps --help
     heroku apps:create app
     heroku addons:create cleardb:ignite // criar banco mysql
     heroku config

     git push heroku master // subir app para heroku
     */

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

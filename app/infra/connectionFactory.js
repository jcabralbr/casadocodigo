// factory method pattern	
var mysql = require('mysql');

// *********************************** 
// **  no trabalho nao tem password **
// ***********************************
 function createDBConnection(){
	return mysql.createConnection({
				host: 'localhost',
				user: 'root',
				password: 'root',
				database: 'casadocodigo_nodejs'	
			});
}

// wrapper
module.exports = function(){
 	return createDBConnection;

 }	

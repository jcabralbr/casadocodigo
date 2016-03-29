exports.lista = lista;

function lista(app, callback) {
    var connection = app.infra.connectionFactory();
    return connection.query('select * from produtos', callback);
}
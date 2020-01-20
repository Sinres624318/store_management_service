var mysql = require('mysql');
var config = require('./base.config');

var pool = mysql.createPool(config);

const query = (sql, callback) => {
    pool.getConnection((error, connection) => {
        connection.query(sql, (err, result) => {
            callback(err, result);
            connection.release();
        });
    });
};
module.exports = {
    query
};
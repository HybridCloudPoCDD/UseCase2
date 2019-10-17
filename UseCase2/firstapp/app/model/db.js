'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'molcloudpoc.mysql.database.azure.com',
    user     : 'hpadmin@molcloudpoc',
    password : 'DBPASSWORD',
    database : 'mydb'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;

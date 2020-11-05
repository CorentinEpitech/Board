'use strict';
const mysql = require('mysql');
const dbConn = mysql.createConnection({
    host: 'localhost',
    port: '3308',
    user: 'root',
    password: 'root',
    database: 'job_advertisements',
});
dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = dbConn;
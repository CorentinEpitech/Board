'use strict';
var dbConn = require('./../../config/db.config');
var Advertisements = function(advertisement) {

    this.advertisement = advertisement.advertisement;
};
Advertisements.findAll = function(result) {
    dbConn.query("Select * from advertisements", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};
module.exports = Advertisements;
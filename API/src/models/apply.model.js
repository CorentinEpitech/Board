'use strict';
var dbConn = require('./../../config/db.config');
var Sub = function(advertisement) {

    this.name = advertisement.name;
    this.family_name = advertisement.family_name;
    this.email = advertisement.email;
    this.age = advertisement.age;
    this.ad_id = advertisement.ad_id;
};
Sub.create = function(newAd, result) {
    dbConn.query("INSERT INTO sub set ?", newAd, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
module.exports = Sub;
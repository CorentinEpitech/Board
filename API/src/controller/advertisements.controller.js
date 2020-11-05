'use strict';
const Advertisement = require('../models/advertisements.model');
exports.findAll = function(req, res) {
    Advertisement.findAll(function(err, ad) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', ad);
        res.send(ad);
    });
};
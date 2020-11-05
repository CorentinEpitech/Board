'use strict';
const Sub = require('../models/apply.model');
exports.create = function(req, res) {
    const new_ad = new Sub(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Sub.create(new_ad, function(err, ad) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Ad created succesfully", data: ad });
        });
    }
};
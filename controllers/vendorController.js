var Vendor = require('../models/vendor');

exports.vendor_list = function (req, res) {

    Vendor
        .findAll()
        .then(result => {
            res.json(result);
        });

};

exports.vendor_details = function (req, res) {

    Vendor.findById(req.params.id).then(vendor => {
        res.json(vendor);
    })

    // res.send("vendor deteils: " + req.params.id);
};

exports.vendor_create_form = function (req, res) {
    res.send("vendor create form");
};

exports.vendor_create_action = function (req, res) {
    res.send("vendor create action (post)");
};
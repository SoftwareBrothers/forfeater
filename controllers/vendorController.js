var db = require('../models');
var Vendor = db.vendor;

exports.vendor_list = function (req, res) {
    Vendor.findAll().then(vendors => {
        res.json(vendors);
    })
};

exports.vendor_show = function (req, res) {
    Vendor.findById(req.params.id).then(vendor => {
        res.json(vendor);
    })
};

exports.vendor_create_form = function (req, res) {
    res.send("vendor create form");
};

exports.vendor_create_action = function (req, res) {
    res.send("vendor create action (post)");
};
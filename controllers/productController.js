var db = require('../models');
var Product = db.product;
var Vendor = db.vendor;

exports.product_list = function (req, res) {
    Product.findAll({ include: [ Vendor ] }).then(products => {
        res.json(products);
    })
};

exports.product_show = function (req, res) {
    Product.findById(req.params.id, { include: [ Vendor ] }).then(product => {
        res.json(product);
    })
}
var db = require('../models');
var Product = db.product;

exports.product_list = function (req, res) {

    Product.findAll().then(products => {
        res.json(products);
    })

};

exports.product_details = function (req, res) {

    Product.findById(req.params.id).then(product => {
        res.json(product);
    })

};
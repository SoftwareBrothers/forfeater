var Product = require('../models/product');

exports.product_details = function (req, res) {

    Product.findById(req.params.id).then(product => {
        res.json(product);
    })

};
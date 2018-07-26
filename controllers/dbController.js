var Vendor = require('../models/vendor');
var User = require('../models/User');
var Product = require('../models/product');

async = require('async');


exports.initialize = function (req, res) {

    async.waterfall([
        function(callback) {
            User.sync({force: true}).then(() => {
                User.create({
                    role: 'user',
                    email: 'piotr.wilczynski@rst-it.com',
                    first_name: 'Piotr',
                    last_name: 'Wilczynski'
                });
                User.create({
                    role: 'user',
                    email: 'pawel.lorenc@rst-it.com',
                    first_name: 'Paweł',
                    last_name: 'Lorenc'
                });
            });
            callback(null);
        },
        function(callback) {
            Vendor.sync({force: true}).then(() => {
                Vendor.create({
                    name: 'KFC',
                    url: 'www.kfc.pl'
                });
                Vendor.create({
                    name: 'Pasibus',
                    url: 'www.pasibus.pl'
                });
            });
            callback(null);
        },
        function(callback) {
            Product.sync({force: true}).then(() => {
                Product.create({
                    name: 'Frytki',
                    vendor_id: 1
                });
            });
            callback(null);
        },
    ], function (err, result) {
        res.send('ok');
        }
    );

};
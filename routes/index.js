var request = require('request');
var express = require('express');
var router = express.Router();
var settings = require('../settings');

/* GET home page. */
router.get('/', function (req, res, next) {

    request('http://92.62.44.145/sales-service-rest/api/v1.0/ptas/BRA/productGroups', {
        headers: {
            'X-Fara-ApiKey': settings.apiKey
        },
        qs: {
            productMedium: 4,
            paymentMethod: 8,
            productClasses: '11,14,17',
            fromZone: 102,
            toZone: 102
        },
        json: true
    }, function (err, response, body) {
        if (err) {
            console.dir(err);
            return next(err);
        }

        if (response.statusCode !== 200) {
            console.dir(response);
            return next();
        }

        console.log(JSON.stringify(body, null, 2));

        res.render('index', {title: 'FARA product prices', products: body});
    });
});

module.exports = router;

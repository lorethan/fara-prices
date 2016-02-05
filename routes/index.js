var request = require('request');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    request('http://92.62.44.145/sales-service-rest/api/v1.0/ptas/BRA/productGroups', {
        headers: {
            'X-Fara-ApiKey': 'c052fa4e-3294-4d01-a7a5-8116db925c43'
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
        if (err || response.statusCode !== 200) {
            console.log('Failed!');
            return next(err);
        }

        console.log(JSON.stringify(body, null, 2));

        res.render('index', {title: 'Express', products: body});
    });
});

module.exports = router;

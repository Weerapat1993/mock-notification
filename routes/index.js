var express = require('express');
var router = express.Router();
var path = '../app/Controllers/';

// Import Class
var HomeController = require(path + 'HomeController');
var NotificationController = require(path + 'NotificationController');

// HomeController
router.get('/', HomeController.index);

// NotificationController
router.get('/notification', NotificationController.index);
router.post('/notification/store', NotificationController.store);

module.exports = router;

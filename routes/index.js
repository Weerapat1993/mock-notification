var express = require('express');
var router = express.Router();
var path = '../app/Controllers/';

// Import Class
var HomeController = require(path + 'HomeController');
var NotificationController = require(path + 'NotificationController');
var ContactController = require(path + 'ContactController');

// HomeController
router.get('/', HomeController.index);

// NotificationController
router.get('/notifications', NotificationController.index);
router.post('/notifications/store', NotificationController.store);

// ContactController
router.get('/contacts', ContactController.index);

module.exports = router;

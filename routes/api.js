var express = require('express');
var router = express.Router();
var path = '../app/API/';

// Import Class
var NotificationAPI = require(path + 'NotificationAPI');

// API =================================================
router.get('/notification', NotificationAPI.index);
router.get('/notification/store', NotificationAPI.store);

module.exports = router;

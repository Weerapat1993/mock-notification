var express = require('express');
var router = express.Router();
var path = '../app/API/';

// Import Class
var NotificationAPI = require(path + 'NotificationAPI');

// API =================================================
router.get('/notifications', NotificationAPI.index);
router.get('/notifications/store', NotificationAPI.store);
router.get('/notifications/read-all', NotificationAPI.readAll);

module.exports = router;

var express = require('express');
var router = express.Router();
var path = '../app/API/';

// Import Class
var NotificationAPI = require(path + 'NotificationAPI');
var ContactAPI = require(path + 'ContactAPI');

// API =================================================
router.get('/notifications', NotificationAPI.index);
router.get('/notifications/store', NotificationAPI.store);
router.get('/notifications/read-all', NotificationAPI.readAll);

router.get('/contacts', ContactAPI.index);
router.post('/contacts', ContactAPI.upload);


module.exports = router;

var express = require('express');
var router = express.Router();

function path(name) {
  return require('../app/API/' + name);
}

// Import Class
var NotificationAPI = path('NotificationAPI');
var ContactAPI = path('ContactAPI');
var AuthAPI = path('AuthAPI');


// API =================================================
router.get('/notifications', NotificationAPI.index);
router.get('/notifications/store', NotificationAPI.store);
router.get('/notifications/read-all', NotificationAPI.readAll);

router.get('/contacts', ContactAPI.index);
router.post('/contacts', ContactAPI.upload);
router.get('/devices/42f3e017c0a6a2de763t5q1z98/contact-groups', ContactAPI.contactGroups);

router.post('/login',AuthAPI.login);


module.exports = router;

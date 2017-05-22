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

router.post('/login',AuthAPI.login);


module.exports = router;

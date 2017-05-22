var express = require('express');
var router = express.Router();

function path(name) {
  return require('../app/Controllers/' + name);
}

// Import Class
var HomeController = path('HomeController');
var NotificationController = path('NotificationController');
var ContactController = path('ContactController');
var AuthController = path('AuthController');

// HomeController
router.get('/', HomeController.index);

// NotificationController
router.get('/notifications', NotificationController.index);
router.post('/notifications/store', NotificationController.store);

// ContactController
router.get('/contacts', ContactController.index);

// LoginController
router.get('/login', AuthController.login);


module.exports = router;

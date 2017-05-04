var NotificationAPI = module.exports = {};
var random = require('../Modules/random')
var config = require('../config')

const typeArray = [
  'Appointment',
  'Follower',
  'Transfer',
  'Order receive',
  'Cancel',
  'Exchange',
  'Return',
  'Friend from Facebook'
];

// GET API NOTIFICATION LIST
NotificationAPI.index = function(req, res, next) {
  var array = [];
  var data = {};
  var body;
  for (var i = 0; i < typeArray.length; i++) {
    switch (typeArray[i]) {
      case 'Appointment': body = 'You got appointment request from'; break;
      case 'Follower': body = 'followed'; break;
      case 'Transfer': body = 'You transfered money to'; break;
      case 'Order receive': body = 'You received order from'; break;
      case 'Cancel': body = 'You got cancel request from'; break;
      case 'Exchange': body = 'You got exchange order from'; break;
      case 'Return': body = 'You got return order from'; break;
      case 'Friend from Facebook': body = 'Your friend from facebook joined Shopbank as'; break;
      default: body = 'Error Notification !!';
    }
    data = {
      title: typeArray[i],
      body: body,
      remote: true,
      readable: false,
      user_id: random.rand(100000,300000),
      sender_id: random.rand(100000,300000),
      amount: random.rand(-100, 100) * 10,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime(),
      token: config.token,
    };
    array.push(data);
  }
  res.send(array);
}

// CRAETE PUSH NOTIFICATION
NotificationAPI.store = function(req, res, next) {
  var i = random.randArray(typeArray.length);
  var body;
  switch (typeArray[i]) {
    case 'Appointment': body = 'You got appointment request from'; break;
    case 'Follower': body = 'followed'; break;
    case 'Transfer': body = 'You transfered money to'; break;
    case 'Order receive': body = 'You received order from'; break;
    case 'Cancel': body = 'You got cancel request from'; break;
    case 'Exchange': body = 'You got exchange order from'; break;
    case 'Return': body = 'You got return order from'; break;
    case 'Friend from Facebook': body = 'Your friend from facebook joined Shopbank as'; break;
    default: body = 'Error Notification !!';
  }
  var fcm = {
    to: config.token,
    notification: {
      title: typeArray[i],
      body: body,
      sound: "default",
      click_action: "fcm.ACTION.HELLO"
    },
    data: {
      title: typeArray[i],
      body: body,
      remote: true,
      readable: false,
      user_id: random.rand(100000,300000),
      sender_id: random.rand(100000,300000),
      amount: random.rand(-100, 100) * 10,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime(),
      token: config.token,
    },
    priority: "high"
  };
  res.send(fcm);
}
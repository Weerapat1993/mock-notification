var NotificationController = module.exports = {};
var random = require('../Modules/random')
var config = require('../config')

// NOTIFICATION
NotificationController.index = function(req, res, next) {
  res.render('notification/index', { title: 'Notification', config: config });
}

// NOTIFICATION STORE
NotificationController.store = function(req, res, next) {
  var body = '';
  var i = req.body.type;
  switch (i) {
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
    to: req.body.token,
    notification: {
      title: i,
      body: body,
      sound: "default",
      click_action: "fcm.ACTION.HELLO"
    },
    data: {
      title: i,
      body: body,
      remote: true,
      readable: false,
      user_id: random.rand(100000,300000),
      sender_id: req.body.sender_id,
      amount: random.rand(-100, 100) * 10,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime(),
      token: req.body.token,
    },
    priority: "high"
  };
  res.send(fcm);
}

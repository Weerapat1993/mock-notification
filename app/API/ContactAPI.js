var ContactAPI = module.exports = {};
var random = require('../Modules/random');
var connection = require('../database');
var async = require('async');

const nameArray = [
  'Superman',
  'Batman',
  'Spiderman',
  'Captian America',
  'Iron Man',
  'Hulk',
  'Thor',
  'Loki',
  'Hawkeye',
];

ContactAPI.index = function(req, res, next) {
  connection.connect(function(err) {
    if (err) {
      console.error('MySQL database is not connection.');
    } else {
      console.log('MySQL database is connected.');
    }
  });
  var array = [];
  var data = {};
  for (var i = 0; i < nameArray.length; i++) {
    data = {
      name: nameArray[i],
      email: 'email@example.com',
      phone_no: random.rand(1000000000,9999999999),
      country_code: random.rand(10,99),
      avatar: 'https://www.shareicon.net/data/256x256/2016/05/24/770029_people_512x512.png',
      status: random.randBoolean() ? 'member' : 'non-member',
      user_id: 0,
    };
    array.push(data);
  }

  res.send({
    data: array,
    code: 200,
    status: 'OK'  
  });
}


ContactAPI.upload = function(req, res, next) {
  const body = req.body.contacts;
  const data = {
    data: body,
    code: 200,
    status: 'OK'  
  }
  res.send(data);
}


ContactAPI.contactGroups = function(req, res, next) {
  let users = []
  let user_detail = {}
  let contact_group = {}
  let body = []
  let data = {}
  connection.query('SELECT * FROM contact_groups', function (err, rows, fields) {
    if (err) throw err
    for (let i = 0; i < rows.length; i++) {
      connection.query(`SELECT * FROM users WHERE id IN (${rows[i].users})`, function (err2, rows2, fields2) {
        if (err) throw err
        users = rows2;
        contact_group = {
          name: rows[i].name,
          users: users,
          timestamp: new Date().getTime()
        }
        body.push(contact_group);
      });
    }
    setTimeout(function () {
      data = {
        data: body,
        code: 200,
        status: 'OK'  
      }
      res.send(data);  
    }, 100)
  })
}

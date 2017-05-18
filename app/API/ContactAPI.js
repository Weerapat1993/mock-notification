var ContactAPI = module.exports = {};
var random = require('../Modules/random')

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
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
      telephone: 0 + random.rand(1000000000,9999999999),
      new: random.randBoolean(),
      invite: random.randBoolean(),
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
  const data = {
    data: [],
    code: 200,
    status: 'OK'  
  }
  res.send(data);
}
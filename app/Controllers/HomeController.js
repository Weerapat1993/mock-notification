var HomeController = module.exports = {};
var connection = require('../database')

HomeController.index = function(req, res, next) {
  res.render('index', { title: 'MP Mobile' });
}

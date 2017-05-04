var HomeController = module.exports = {};

HomeController.index = function(req, res, next) {
  res.render('index', { title: 'MP Mobile' });
}

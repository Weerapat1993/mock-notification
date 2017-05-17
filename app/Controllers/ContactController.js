var ContactController = module.exports = {};

ContactController.index = function(req, res, next) {
  res.render('contact/index', { title: 'Contact' });
}

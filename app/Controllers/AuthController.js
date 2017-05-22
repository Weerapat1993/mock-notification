var AuthController = module.exports = {};

AuthController.login = function(req, res, next) {
  res.render('auth/login', { title: 'Authenication' });
}

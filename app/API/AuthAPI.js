var AuthAPI = module.exports = {};

AuthAPI.login = function(req, res, next) {
  var user = null;
  var data = {
    id: 1,
    name: 'Admin Example',
    email: 'admin@example.com',
    password: 'qwerty',
  }

  if(req.body.email.toLowerCase() == data.email.toLowerCase() && req.body.password == data.password) {
    user = data,
    res.send({
      data: user,
      code: 200,
      status: 'OK',
      error: {
        message: 'Login Successful'
      }
    });
  } else {
    res.send({
      data: user,
      code: 500,
      status: 'Error',
      error: {
        message: 'User is not found'
      }  
    });
  }
}

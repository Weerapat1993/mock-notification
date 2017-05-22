var AuthAPI = module.exports = {};

AuthAPI.login = function(req, res, next) {
  var user = null;
  var data = {
    id: 1,
    name: 'Admin Example',
    email: 'admin@example.com',
    password: 123456,
  }
  if(req.body.email == data.email) {
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

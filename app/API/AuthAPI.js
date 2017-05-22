var AuthAPI = module.exports = {};
// var data = [
//   {
//     id: 1,
//     name: 'Admin Example',
//     email: 'admin@example.com',
//     password: 'qwerty',
//   }
// ]

AuthAPI.login = function(req, res, next) {
  var user = null;
  var msg = null;
  var data = {
    id: 1,
    name: 'Admin Example',
    email: 'admin@example.com',
    password: 'qwerty',
  }
  var msg = null;

  if(req.body.email.toLowerCase() == data.email.toLowerCase()) {
    if(req.body.password.toLowerCase() != data.password.toLowerCase()){
      msg = 'Password Incorrect'
    } else {
      msg = 'Login Successful'
      user = data;
    }
    res.send({
      data: user,
      code: 200,
      status: 'OK',
      error: {
        message: msg
      }
    });
  } else {
    msg = 'User is not found'
    res.send({
      data: user,
      code: 500,
      status: 'Error',
      error: {
        message: msg
      }  
    });
  }
}

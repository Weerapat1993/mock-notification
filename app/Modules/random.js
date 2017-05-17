var random = module.exports = {};

random.rand = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

random.randArray = function(max) {
  return Math.floor(Math.random() * (max - 1));
}

random.randBoolean = function() {
  var rand = Math.random();
  if(rand > 0.5) {
    return true;
  } else {
    return false;
  }
}

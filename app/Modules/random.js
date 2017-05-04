var random = module.exports = {};

random.rand = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

random.randArray = function(max) {
  return Math.floor(Math.random() * (max - 1));
}

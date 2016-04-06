const Greet = module.exports = function(name) {
  this.name = name;
  this.greet = function() {
    return 'hello ' + (name || 'world');
  };
};

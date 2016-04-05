const Greet = module.exports = function(name) {
  this.name = 'Brandon';
  this.greet = function() {
    return 'hello ' + this.name;
  };
};

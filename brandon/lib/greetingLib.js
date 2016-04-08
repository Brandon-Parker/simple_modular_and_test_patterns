const greeting = module.exports = function(name) {
  return 'hello ' + (name || 'universe');
};

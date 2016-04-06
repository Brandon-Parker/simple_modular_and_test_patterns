#!/usr/bin/env node

const Greet = require(__dirname + '/../lib/greet');

var greetCli = module.exports = function() {
  return new Greet(process.argv[2]).greet();
};

process.stdout.write(greetCli() + '\n');

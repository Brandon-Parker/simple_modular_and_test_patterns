#!/usr/bin/env node

var greeting = require(__dirname + '/../lib/greetingLib');

var greetCli = module.exports = function() {
  return greeting(process.argv[2]);
}

process.stdout.write(greetCli() + '\n');

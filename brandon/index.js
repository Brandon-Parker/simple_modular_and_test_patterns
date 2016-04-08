const greetCli = require(__dirname + "/bin/greetingBin");

process.stdout.write(greetCli() + '\n');

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  pwd(cmd);
  ls(cmd);
  cat(cmd);
  curl(cmd);
  // process.stdout.write('You typed: ' + cmd.slice(4))
  // process.stdout.write('\nprompt > ')
})

const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat')
const curl = require('./curl');

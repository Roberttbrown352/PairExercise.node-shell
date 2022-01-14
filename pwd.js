const done = require('./bash')

function pwd(cmd, done) {
  if(cmd === 'pwd'){
    done(__dirname)
  }
}

module.exports = pwd

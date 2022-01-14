const fs = require('fs')

function ls(cmd) {
  if (cmd === 'ls') {
    fs.readdir(__dirname, (err, files) => {
      if (err) {
        throw err
      } else {
        process.stdout.write('\n')
        process.stdout.write(files.join('\n'))
        process.stdout.write('\nprompt > ')
      }
    })
  }
}

module.exports = ls;

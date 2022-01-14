const fs = require('fs')

function cat(cmd) {
  if(cmd.slice(0, 4) === 'cat '){

    fs.readFile(cmd.slice(4), 'utf8', function(err, data){

        process.stdout.write('\n')
        process.stdout.write(data)
        process.stdout.write('\nprompt > ')
    })
  }
}

module.exports = cat

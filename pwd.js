function pwd(cmd) {
  if(cmd === 'pwd'){
    process.stdout.write(process.env.PWD)
  }
}

module.exports = pwd

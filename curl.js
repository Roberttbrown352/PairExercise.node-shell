const request = require('request');

function curl(cmd) {
  if (cmd.slice(0, 5) === 'curl ') {
    request(cmd.slice(5), function (error, response, body) {
      console.error('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
    });
  }
}

module.exports = curl;

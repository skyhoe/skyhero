'use strict';

var request = require('request');

const serverUrl = process.env.SERVER_URL;

module.exports.takeoff = (event, context, callback) => {
  console.log(event);

  request.post(serverUrl, (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  });

  const response = {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: 'Hello, hack for good. We are ready to take off.',
      },
      shouldEndSession: true
    },
  };

  callback(null, response);
};

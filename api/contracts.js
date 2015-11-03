var Promise = require('bluebird')
  ;

var test = require('./models/test');

exports.handler = function(event, context) {
  console.log('Test run', test.run());
  console.log('Received event:', JSON.stringify(event, null, 2));

  return new Promise(function(resolve, reject) {

    resolve(event);

  }).then(function(result) {

    context.succeed(event);
    

  }).catch(function(error) {

    context.fail('Something went rong');

  });

}

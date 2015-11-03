describe('Load Lambda', function() {

  process.env.DEBUG = '*';

  var Lambda = require('aws-deploy').Lambda;

  it('can', function(done) {

    var lambda = new Lambda('api/contracts.js');

    // console.log(lambda.base64);

    console.log(lambda.name);

    console.log(lambda.sha256);

    done();

  });

});

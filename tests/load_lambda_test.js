var should = require('should');

describe('Load Lambda', function() {

  process.env.DEBUG = '*';

  var Lambda = require('aws-deploy').Lambda;

  it('can', function(done) {

    var deploy = {
      account: 'XXX',
      app: 'contract-api',
      version: 0,
      stage: 'test',
    }

    var lambda = new Lambda({
        file: 'api/auth.js',
        Handler: 'api/auth.handler',
        Description: 'Description',
        MemorySize: 128,
        Timeout: 3,
        Role: 'lambda_basic_execution',
      }, deploy);

    // console.log(lambda.name);
    // console.log(lambda.sha256);

    console.log(lambda.toCreateFunction());


    console.log(lambda.toUpdateFunctionConfiguration());

    done();

  });

});

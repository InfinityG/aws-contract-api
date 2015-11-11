/** 
 *
 * `bin/deploy` deploys this to AWS
 *
 */

module.exports = {

  version: 0,

  name: 'Contract Api',

  description: 'Contract Api',

  deployment: {
    variables: {
      test: '1'
    },
    cacheClusterEnabled: 'false',
    cacheClusterSize: '0.5',   // [58.2, 13.5, 28.4, 237, 0.5, 118, 6.1, 1.6]
  },


  
  routes: {

    '/test': {
      GET: {
        integration: {
          lambda: {
            file: 'api/test.js',
            Handler: 'api/test.handler',
          }
        }
      }
    },

    '/test2': {
      GET: {
        integration: {
          lambda: {
            file: 'api/auth.js',
            Handler: 'api/auth.handler',
            // file: 'api/test.js',
            // Handler: 'api/test.handler',
          }
        }
      }
    }

    // '/example/{moo}': {
    //   GET: {
    //     method: {
    //       authorizationType: 'NONE',
    //       apiKeyRequired: true,
    //       requestParameters: {},
    //       requestModels: {},
    //     },
    //     integration: {
    //       type: 'HTTP',
    //       httpMethod: 'GET',
    //       uri: 'https://www.google.co.za',
    //       credentials: null,
    //       requestParameters: {},
    //       requestTemplates: {},
    //       cacheNamespace: null,
    //       cacheKeyParameters: [],
    //     }
    //   },
    //   // POST: {}
    // },

    // '/contracts/deeper': {
    //   GET: {
    //     integration: {
    //       lambda: {
    //         file: 'api/contracts.js',
    //         Handler: 'api/contracts.handler',
    //         // file: 'api/auth.js',
    //         // Handler: 'api/auth.handler',
    //         // Description: 'Description',
    //         // MemorySize: 128,
    //         // Timeout: 11,
    //         // Role: 'lambda_basic_execution',
    //       }
    //     }
    //   },
    //   // GET: {
    //   //   method: {
    //   //     // apiKeyRequired: true,
    //   //     // authorizationType: 'AWS_IAM',
    //   //     requestParameters: {
    //   //       // 'method.request.querystring.XXX': true,
    //   //       'method.request.querystring.YYY': true,
    //   //       'method.request.querystring.ZZZ': true,
    //   //     }
    //   //   }
    //   // },
    // },

    // '/contracts/{contract_id}': {
    //   GET: {},
    // },

    // '/contracts/{contract_id}/conditions/{condition_id}': {
    //   GET: {
    //     method: {
    //       apiKeyRequired: true,
    //     }
    //   },
    // },

    // '/contracts/{contract_id}/conditions/{condition_id}/signatures': {
    //   POST: {},
    // },

    // '/contracts/{contract_id}/conditions/{condition_id}/signatures/{signature_id}': {
    //   POST: {
    //     method: {
    //       // authorizationType: 'NONE',
    //     //   apiKeyRequired: false,
    //     //   requestParameters: {},
    //     //   requestModels: {},
    //     }
    //   },
    // },

    // '/contracts/{contract_id}/signatures/{signature_id}': {
    //   POST: {},
    // }

  }

}

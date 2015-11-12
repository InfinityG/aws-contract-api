module.exports = {

  // defaults commented

  '/examples': {
    PUT: {
      method: {
        // authorizationType: 'NONE',
        // apiKeyRequired: false,
        // requestParameters: {},
        // requestModels: {},
        requestModels: {
          'application/json': 'ExampleRequestModel'
        },

        responses: {
          200: {
            responseModels: {
              'application/json': 'ExampleResponseModel'
            },
            responseParameters: {
              'method.response.header.xxx-response-header': false,
              'method.response.header.xxx-more': false
            }
          },
          400: {
            responseModels: {
              'application/json': 'Error'
            }
          }
        }

      },
      integration: {
        lambda: {
          file: 'api/example.js',
          Handler: 'api/example.put',
        }
      }
    },

    // GET: {}
  },

  // '/examples/{example_id}': {
  //   POST: {
  //     method: {
  //       // authorizationType: 'NONE',
  //       // apiKeyRequired: false,
  //       // requestParameters: {},
  //       // requestModels: {},
  //       requestModels: {
  //         'application/json': 'ExampleRequestModel'
  //       }
  //     },
  //     integration: {
  //       lambda: {
  //         file: 'api/example.js',
  //         Handler: 'api/example.post',
  //       }
  //     }
  //   }
  // },

  // '/example': {
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

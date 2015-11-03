/** 
 *
 * `bin/deploy` deploys this to AWS
 *
 */

module.exports = {

  name: 'Contract Api',

  description: 'Contract Api',
  
  routes: {

    '/contracts': {
      POST: {
        integration: {
          lambda: 'api/contracts.js'
        }
      },
      GET: {
        method: {
          // apiKeyRequired: true,
          // authorizationType: 'AWS_IAM',
          requestParameters: {
            // 'method.request.querystring.XXX': true,
            'method.request.querystring.YYY': true,
            'method.request.querystring.ZZZ': true,
          }
        }
      },
    },

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

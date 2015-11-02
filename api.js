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
      POST: {},
      GET: {},
    },

    '/contracts/{contract_id}': {
      GET: {},
    },

    '/contracts/{contract_id}/conditions/{condition_id}': {
      GET: {},
    },

    '/contracts/{contract_id}/conditions/{condition_id}/signatures': {
      POST: {},
    },

    '/contracts/{contract_id}/conditions/{condition_id}/signatures/{signature_id}': {
      POST: {
        method: {
          authorizationType: 'XXXXX',
        //   apiKeyRequired: false,
        //   requestParameters: {},
        //   requestModels: {},
        }
      },
    },

    '/contracts/{contract_id}/signatures/{signature_id}': {
      POST: {},
    }

  }

}

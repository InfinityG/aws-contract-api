/** 
 * Api Tree
 *
 * Defines the api tree used to deploy resource definitions
 * into the AWS API Gateway,
 *
 * With associated integration points (lambdas)
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

    '/contracts/:contract_id': {
      GET: {},
    },

    '/contracts/:contract_id/conditions/:condition_id': {
      GET: {},
    },

    '/contracts/:contract_id/conditions/:condition_id/signatures': {
      POST: {},
    },

    '/contracts/:contract_id/conditions/:condition_id/signatures/:signature_id': {
      POST: {},
    },


    '/contracts/:contract_id/signatures/:signature_id': {
      POST: {},
    }

  }

}

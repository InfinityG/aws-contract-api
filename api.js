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
  
  root: {
    _methods: {
      GET: {}
    },
    
    'contracts': {
      _methods: {
        GET: {}
      }
    }
  }
}

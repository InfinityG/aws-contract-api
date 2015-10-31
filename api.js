/** 
 * Api Tree
 *
 * Defines the api tree used to deploy resource definitions
 * into the AWS API Gateway
 *
 */

module.exports = {

  name: 'The Api Name',
  description: 'The Api Description',
  
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

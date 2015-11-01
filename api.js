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

    // _methods: {
    //   GET: {}
    // },
    
    'contracts': {
      _methods: {
        POST: {},
        GET: {}
      },

      '{contract_id}': {
        _methods: {
          GET: {}
        },

        'conditions': {

          '{condition_id}': {
            _methods: {
              GET: {}
            },

            'signatures': {

              _methods: {
                POST: {}
              },

              '{signature_id}': {
                _methods: {
                  POST: {}
                }
              }
            }
          }
        },

        'signatures': {

          '{signature_id}': {
            
            _methods: {
              POST: {}
            }
          }
        }
      }
    }
  }
}

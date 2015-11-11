/** 
 *
 * `bin/deploy` deploys this to AWS
 *
 */

module.exports = {

  version: 0,

  name: 'Contract Api',

  description: 'Contract Api',

  deployment: require('./api_deployment'),

  models: require('./api_models'),
  
  routes: require('./api_routes'),

}

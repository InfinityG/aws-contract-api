module.exports = {

  'ExampleRequestModel': {
    description: 'Example model for resuests.',
    contentType: 'application/json',
    schema: {

      // http://json-schema.org/examples.html

      title: 'Example Request Model',
      type: 'object',
      properties: {
        'astring': {
          type: 'string'
        },
        'aboolean': {
          type: 'boolean'
        },
        'anumber': {
          type: 'number'
        }
      },
      required: ['astring']
    }
  },

  'ExampleResponseModel': {
    description: 'Example model for responses',
    contentType: 'application/json',
    schema: {
      title: 'Example Response Model',
      type: 'object',
      properties: {
        'astring': {
          type: 'string'
        },
        'aboolean': {
          type: 'boolean'
        },
        'anumber': {
          type: 'number'
        }
      }
    }
  },

}

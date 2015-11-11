exports.put = function(event, context) {
  
  console.log('EVENT', event);
  console.log('CONTEXT', context);

  context.succeed();

}

exports.post = function(event, context) {
  
  console.log('EVENT', event);
  console.log('CONTEXT', context);

  context.succeed();

}


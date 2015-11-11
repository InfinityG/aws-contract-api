exports.handler = function(event, context) {
  
  console.log('EVENT', event);
  console.log('CONTEXT', context);

  context.succeed();

}

# aws-contract-api

* [test](tests/)
* [deploy](bin/README.md#deploy)

### Notes:

Grant api gateway to invoke lambda

from https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role

```
aws lambda add-permission \
--region us-west-2 \
--function-name helloworld \
--statement-id 5 \
--principal apigateway.amazonaws.com \
--action lambda:InvokeFunction \
--source-arn arn:aws:apigateway:us-east-1::my-api-id:/test/petstorewalkthrough/pets \
--profile adminuser

```


# aws-contract-api

* [test](tests/)
* [deploy](bin/README.md#deploy)

### Notes:

Grant api gateway permission to invoke lambda

from https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role

```
aws lambda add-permission \
--region eu-west-1 \
--function-name v0--contract-api--api--example_js--put \
--statement-id xxxxx \
--principal apigateway.amazonaws.com \
--action lambda:InvokeFunction \
--source-arn arn:aws:apigateway:eu-west-1::xt6hbyr9q1:/examples \
--profile developer

```

Api lambda permission

```
You are about to give API Gateway permission to invoke your Lambda function:
arn:aws:lambda:eu-west-1:217750571380:function:v0--contract-api--api--auth_js

https://eu-west-1.console.aws.amazon.com/apigateway/lambda/regions/eu-west-1/functions/arn:aws:lambda:eu-west-1:217750571380:function:v0--contract-api--api--auth_js/permission

arn:aws:execute-api:eu-west-1:217750571380:7ltqe8axk0/*/GET/contracts
```

* step by step
* required roles
* versioning strategy



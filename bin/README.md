
# bin(s)


## deploy

`bin/deploy -h`

Deploys the api definition in [../api.js](https://github.com/InfinityG/aws-contract-api/blob/master/api.js)

Has the following configuration requirements.

### global deployment configuration

Requires [.env](https://github.com/InfinityG/aws-contract-api/blob/master/.env) file containing variables:

__AWS_REGION__ - The AWS region to deply into.<br/>

### per user deployment configuration

Requires `$HOME/.aws/credentials` file contiaing your AWS IAM user profiles.

eg.

```
[username1]
aws_access_key_id = XXXXXXXXXXXXXXXXXX
aws_secret_access_key = xxxxxxxxxxxxxx

[username2]
aws_access_key_id = XXXXXXXXXXXXXXXXXX
aws_secret_access_key = xxxxxxxxxxxxxx 

```

Requires `.env.$USER` file containing variables:

See [.env.sample](https://github.com/InfinityG/aws-contract-api/blob/master/.env.sample)

__AWS_USER__ - Specifies which AWS user in the credentials file to use for the deployment.<br/>



# bin(s)


## deploy

### global deployment configuration

Requires `.env` file containing variables:

__AWS_ACCOUNT__ - The AWS account to deploy into.
__AWS_REGION__ - The AWS region to deply into.



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

See `.env.sample`

__AWS_USER__ - Specifies which AWS user in the credentials file to use for the deployment.


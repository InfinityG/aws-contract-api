
# bin(s)


## deploy

NB deploy must be run from the project's root directory

`bin/deploy -h`

Deploys the api definition in [../api.js](https://github.com/InfinityG/aws-contract-api/blob/master/api.js)

__Has the following configuration requirements:__

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

Requires `.env.$USER` file containing variables according to [.env.sample](https://github.com/InfinityG/aws-contract-api/blob/master/.env.sample)

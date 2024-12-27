// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4gjjbj52rnrriqh80ho9abp9hb",     // CognitoClientID
  "api_base_url": "https://qtx140sfii.execute-api.us-east-1.amazonaws.com/",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-test-demo.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d3a0j5tgleudr.amplifyapp.com"                                      // AmplifyURL
};

export default config;

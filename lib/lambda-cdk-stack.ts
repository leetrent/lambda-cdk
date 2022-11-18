import * as cdk from 'aws-cdk-lib';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LambdaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'LambdaCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const helloHandler = new Function(this, 'HelloHandler', {
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset('lambda'),
      handler: 'hello.handler'
    });

    // DEFINES AN API GATEWAY RESP API RESOURCE BACK BY THE 'hello' LAMBDA FUNCTION
    new LambdaRestApi(this, "HelloApiGateway", {
      handler: helloHandler,
    });
  }
}

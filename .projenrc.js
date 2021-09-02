const { AwsCdkTypeScriptApp } = require('projen');
const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.119.0',
  defaultReleaseBranch: 'main',
  name: 'test-app-cdkpipeline',

  deps: [
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-s3',
    '@aws-cdk/pipelines',
    'cdk-pipelines-github',
  ],

  context: {
    '@aws-cdk/core:newStyleStackSynthesis': '1',
  },
});

project.synth();
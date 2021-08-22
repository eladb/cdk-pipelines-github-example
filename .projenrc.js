const { AwsCdkTypeScriptApp } = require('projen');
const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',
  name: 'test-app-cdkpipeline',

  cdkDependencies: [
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-s3',
    '@aws-cdk/pipelines',
  ],

  deps: [
    'cdk-pipelines-github',
  ],

  context: {
    '@aws-cdk/core:newStyleStackSynthesis': '1',
  },
});


project.synth();
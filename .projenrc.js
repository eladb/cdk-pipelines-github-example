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

const cdkjson = project.tryFindObjectFile('cdk.json');
cdkjson.addOverride('versionReporting', false);

// extract a template from cdk.out so we can diagnose diff between local & CI build
project.buildTask.exec('cp cdk.out/assembly-US/USFunctionStackFE5EB3B1.template.json USFunctionStackFE5EB3B1.template.json');

project.synth();
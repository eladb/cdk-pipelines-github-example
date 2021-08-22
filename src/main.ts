import { App } from '@aws-cdk/core';
import { ShellStep } from '@aws-cdk/pipelines';
import { GitHubWorkflow } from 'cdk-pipelines-github';
import { MyStage } from './my-stage';

const app = new App();

const pipeline = new GitHubWorkflow(app, 'Pipeline', {
  synth: new ShellStep('Build', { commands: ['yarn', 'yarn build'] }),
  workflowPath: '.github/workflows/deploy.yml',
});

// a wave deploys all stages concurrently
const prod = pipeline.addWave('Prod');

const ACCOUNT = '585695036304';
prod.addStage(new MyStage(app, 'US', { env: { account: ACCOUNT, region: 'us-east-1' } }));
prod.addStage(new MyStage(app, 'EU', { env: { account: ACCOUNT, region: 'eu-west-2' } }));

app.synth();

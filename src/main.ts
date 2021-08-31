import { App } from '@aws-cdk/core';
import { ShellStep } from '@aws-cdk/pipelines';
import { GitHubWorkflow } from 'cdk-pipelines-github';
import { MyStage } from './my-stage';

const app = new App();

const build = [
  'yarn',
  'yarn build',
  'git diff --exit-code', // <-- this will fail the build if the workflow is not up-to-date
];

const pipeline = new GitHubWorkflow(app, 'Pipeline', {
  synth: new ShellStep('Build', { commands: build }),
  workflowPath: '.github/workflows/deploy.yml',
  preBuildSteps: [
    // caveat: this _must_ be the same node version as the one we use on the dev machine
    // otherwise, the analytics data (which includes the node version) will not be the same
    // between dev and ci build and the template hash will not be the same
    { uses: 'actions/setup-node@v2', with: { nodeVersion: process.version } },
  ],
});

// a wave deploys all stages concurrently
const prod = pipeline.addWave('Prod');

const ACCOUNT = '585695036304';
prod.addStage(new MyStage(app, 'US', { env: { account: ACCOUNT, region: 'us-east-1' } }));
prod.addStage(new MyStage(app, 'EU', { env: { account: ACCOUNT, region: 'eu-west-2' } }));

app.synth();

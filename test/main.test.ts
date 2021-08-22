import '@aws-cdk/assert/jest';
import { App } from '@aws-cdk/core';
import { MyStage } from '../src/my-stage';

test('Snapshot', () => {
  const app = new App({
    context: { '@aws-cdk/core:newStyleStackSynthesis': '1' },
  });
  new MyStage(app, 'MyStage');

  const out = app.synth();
  for (const stack of out.stacks) {
    expect(stack.template).toMatchSnapshot();
  }
});
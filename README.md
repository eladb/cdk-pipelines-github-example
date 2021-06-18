# CDK Pipelines backed by GitHub Workflows - Test App

This repository includes the output of the GitHub engine example app as implemented in [this proof of concept](https://github.com/aws/aws-cdk/pull/15191).

## How to use?

You'll need to check-out and build the `benisrae/pipelines-github` branch:

```shell
cd ~/projects
git clone git@github.com:aws/aws-cdk.git -b benisrae/pipelines-github
cd aws-cdk
yarn
./scripts/foreach.sh yarn build
cd packages/@aws-cdk/pipelines
yarn link
```

Add the local version of CDK CLI to your PATH:

```shell
export PATH=$HOME/projects/aws-cdk/packages/aws-cdk/bin:$PATH
```

Bootstrap your environments (you need to use an updated bootstrap template):

```shell
export CDK_NEW_BOOTSTRAP=1
cdk bootstrap aws://ACCOUNTID/us-east-1
cdk bootstrap aws://ACCOUNTID/eu-west-2
```

Now, clone this repository, link to the dev version and synthesize:

```shell
cd ~/projects
git clone git@github.com:eladb/test-app-cdkpipeline.git
cd test-app-cdkpipeline
yarn link @aws-cdk/pipelines
cdk synth
```

You can edit the sample app under `~/projects/aws-cdk/packages/@aws-cdk/pipelines/test/blueprint/github/example-app.ts`.


## License

Licensed under the Apache 2.0 license.

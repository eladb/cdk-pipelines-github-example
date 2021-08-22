# CDK Pipelines for GitHub Workflows - Example

This is an example project that uses GitHub workflows to deploy a CDK app
through CDK Pipelines. See the
[cdk-pipelines-github](https://github.com/cdklabs/cdk-pipelines-github) project
for additional details.

The application's main entry point and pipeline definition is under [main.ts](./src/main.ts).

This a standard AWS CDK TypeScript project. When you run `yarn synth`, it will produce a GitHub workflow under [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) with the following workflow:

![Screen Shot 2021-08-22 at 12 06 05](https://user-images.githubusercontent.com/598796/130349345-a10a2f75-0848-4de8-bc4c-f5a1418ee228.png)


## License

Licensed under the Apache 2.0 license.

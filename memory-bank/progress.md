# Progress

_What works, what's left to build, current status, known issues, evolution of
project decisions._

What works: The basic project structure is set up, including the Nx monorepo,
Next.js frontend, and NestJS backend. The CI/CD pipeline is configured in GitHub
Actions. Docusaurus is setup using the nx plugin (nx-extend/docusaurus), the
docs is the default template. Site Doc is deployed. The documentation build bug
in the CI has been fixed and basic documentation has been added. The 'health'
application now builds, unit tests pass (Jest), serves with file watching/reload
(using the `webpack:webpack` executor), and passes e2e tests.

What's left to build: The AI Proxy API and Chat interface need to be built.

Current status: Docusaurus is setup using the nx plugin (nx-extend/docusaurus)
in the apps/docs directory. The documentation build bug in the CI has been fixed
and basic documentation is in place. The 'health' application is successfully
building, testing, serving with reload, and passing e2e tests.

Known issues:

- Nx bug with `@nx/js:node` executor preventing file watching for automatic
  reloads in the 'health' application. Workaround is to use the
  `webpack:webpack` executor for the serve target in `apps/health/package.json`.

Evolution of project decisions: The decision was made to use Nx for managing the
monorepo, Next.js for the frontend, NestJS for the backend, and Pulumi for
infrastructure. The decision was made to use the nx plugin
(nx-extend/docusaurus) for Docusaurus setup. The executor for serving the
'health' application was changed to `webpack:webpack` to enable file watching
due to a known issue with the `@nx/js:node` executor.

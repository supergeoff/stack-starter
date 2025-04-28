# Progress

_What works, what's left to build, current status, known issues, evolution of
project decisions._

What works: The basic project structure is set up, including the Nx monorepo,
Next.js frontend, and NestJS backend. The CI/CD pipeline is configured in GitHub
Actions. Docusaurus is setup using the nx plugin (nx-extend/docusaurus), the
docs is the default template. Site Doc is deployed.

What's left to build: The AI Proxy API and Chat interface need to be Fix the
build error preventing the CI from deploying the docs to GitHub Pages.

Current status: Docusaurus is setup using the nx plugin (nx-extend/docusaurus)
in the apps/docs directory. There is a build error in the CI to build and host
the doc on Github Pages

Known issues: Build error preventing the CI from deploying the docs to GitHub
Pages.

Evolution of project decisions: The decision was made to use Nx for managing the
monorepo, Next.js for the frontend, NestJS for the backend, and Pulumi for The
decision was made to use the nx plugin (nx-extend/docusaurus) for Docusaurus
setup.

# Tech Context

_Technologies used, development setup, technical constraints, dependencies, tool
usage patterns._

Technologies used include Next.js, React, NestJS, TypeScript, Tailwind CSS,
Shadcn/ui, Pulumi, Google Cloud Firestore, Google Vertex AI Search, Google Cloud
Pub/Sub, Google Cloud Run, GitHub Actions, and Docusaurus.

The development setup involves using VS Code with the Nx Console extension, pnpm
for package management, and Git for version control.

Technical constraints include adhering to the project's coding standards and
best practices, and ensuring compatibility with the target Google Cloud
environment.

Dependencies are managed using pnpm and are defined in the package.json file.

Tool usage patterns include using Nx commands for common development tasks,
Pulumi for managing infrastructure, and GitHub Actions for CI/CD.

Known Issues:

- Nx bug with `@nx/js:node` executor preventing file watching for automatic
  reloads in the 'health' application. Workaround is to use the
  `webpack:webpack` executor for the serve target in `apps/health/package.json`.

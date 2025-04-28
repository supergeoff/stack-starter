# System Patterns

_System architecture, key technical decisions, design patterns, component
relationships, critical implementation paths._

The system architecture follows a monorepo structure managed by Nx. The frontend
is a Next.js application, and the backend is a NestJS application.
Infrastructure is managed as code using Pulumi.

Key technical decisions include using TypeScript for all code, Tailwind CSS and
Shadcn/ui for UI components, and Google Cloud services for deployment and data
storage.

Design patterns include the use of shared libraries for reusable code, feature
modules for organizing application logic, and infrastructure-as-code for
managing cloud resources.

Component relationships are defined within the Nx workspace configuration.
Critical implementation paths include the CI/CD pipeline defined in GitHub
Actions and the Pulumi scripts for deploying infrastructure.

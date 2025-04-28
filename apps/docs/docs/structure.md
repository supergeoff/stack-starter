---
sidebar_position: 2
---

# Project Structure

```
my-workspace/
├── apps/ # Contains deployable applications
│ ├── webapp#1/ # Example: Your first Next.js frontend
│ ├── api#1/ # Example: Your first NestJS backend for webapp#1
│ └── webapp#2/ # Example: Another frontend or backend app
│ └── ... # Other applications (e.g., mobile, CLIs)
│
├── libs/ # Contains reusable code libraries
│ ├── shared/ # Scope: Code shared across multiple applications/domains
│ │ ├── ui/ # Type: Shared presentational components (design system?)
│ │ ├── data-access/ # Type: Shared DTOs, interfaces, client-side API logic
│ │ ├── util/ # Type: Shared utility functions, constants, helpers
│ │ └── assets/ # Type: Shared static assets (icons, images)
│ │
│ ├── webapp#1/ # Scope: Libraries specific to the 'webapp#1' application
│ │ ├── feature/ # Type: Feature modules (e.g., feature-auth, feature-profile)
│ │ ├── ui/ # Type: UI components specific to 'webapp#1'
│ │ ├── data-access/ # Type: State management, data fetching logic for 'webapp#1'
│ │ └── util/ # Type: Utilities specific to 'webapp#1'
│ │
│ ├── api#1/ # Scope: Libraries specific to the 'api#1' application
│ │ ├── feature/ # Type: Feature modules (controllers, services, logic)
│ │ ├── data-access/ # Type: Database interactions, entities, repositories
│ │ ├── core/ # Type: Core backend functionalities (auth guards, decorators)
│ │ └── util/ # Type: Utilities specific to 'api#1'
│ │
│ └── another-domain/ # Scope: Libraries related to another business domain/app
│ └── ... # Grouped by type (feature, ui, data-access, util)
│
├── tools/ # Workspace-specific tooling
│ ├── generators/ # Custom code generators for scaffolding
│ └── scripts/ # Automation scripts (build, deploy helpers, etc.)
│
├── .github/ # Standard location for GitHub Actions
│ └── workflows/ # CI/CD pipeline definitions
│
├── nx.json # Nx workspace configuration file
├── package.json # Root dependencies & workspace scripts
├── tsconfig.base.json # Base TypeScript config shared across projects
└── ... # Other root config files (eslint, prettier, jest, etc.)
```

# Dev Container Template: Monorepo Stack (Nx + Node 22 + TS + GCP + Pulumi)

This repository serves as a base template for quickly starting new projects using a modern and cohesive technology stack, encapsulated in a containerized development environment (Dev Container).

The goal is to provide a ready-to-use environment with essential tools pre-configured for efficient development within an Nx-managed monorepo.

## Target Technology Stack

This Dev Container is configured to support the following technologies:

- **Monorepo:** Nx (via the Nx Console extension)
- **Runtime:** Node.js v22
- **Language:** TypeScript
- **Cloud:** Google Cloud Platform (GCP)
- **Infrastructure as Code:** Pulumi
- **Package Manager:** `pnpm` (preinstalled in the container)

## Dev Container Features

- **Base Image:** `mcr.microsoft.com/devcontainers/typescript-node:22`
- **Included CLI Tools:**
  - Docker (via host Docker socket mounting - `docker-in-docker` feature)
  - GitHub CLI (`gh`)
  - Pulumi CLI (`pulumi`)
  - Google Cloud CLI (`gcloud`)

## VS Code Configuration

The environment is pre-configured for VS Code with:

- **Essential Extensions:**
  - Linting & Formatting: ESLint, Prettier
  - Frameworks & Tools: Nx Console, Tailwind CSS IntelliSense, GraphQL
  - Cloud & Infra: Pulumi, Google Cloud Code, Docker
  - Git: GitLens, Git Graph
  - Utilities: Code Runner, Task Explorer, PNPM, TODO Highlight, DotEnv
  - Theme: Material Theme + Icons
  - AI Assistants: Claude AI (Gemini is disabled)
  - Others: Postman
- **Key Settings:**
  - **Default Formatter:** Prettier (`esbenp.prettier-vscode`)
  - **Format on Save:** Enabled (`editor.formatOnSave: true`)
  - **Theme:** Material Theme Darker High Contrast (UI) & Material Theme Icons Darker (Icons)

## Forwarded Ports

The following ports are automatically forwarded from inside the container to your local machine:

- `3000`: Port often used by frontend applications (e.g., Next.js)
- `3001`: Potential port for an API or backend service (e.g., NestJS)

## How to Use This Template

1.  **Create a new repository:** Click on the "Use this template" button on this repository's GitHub page.
2.  **Clone your new repository:** Clone the repository you just created to your local machine.
    ```bash
    git clone <your-new-repo-url>
    cd <your-new-repo-name>
    ```

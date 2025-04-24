# Cline Contributing Rules for Technical Accelerator Project

These rules guide Cline's suggestions to ensure they align precisely with the established technical stack and conventions of this project.

## 1. Package Management

- **Rule 1.1 (PNPM Only):** MUST use `pnpm` for all package installation, removal, and management commands (e.g., `pnpm install`, `pnpm add -D`, `pnpm run`).
- **Rule 1.2 (No NPM/Yarn):** MUST NOT suggest or generate commands using `npm` or `yarn`.

## 2. Command Execution

- **Rule 2.1 (NPX Preference):** MUST use `npx` when executing locally installed package binaries directly (e.g., `npx prisma migrate dev`), _if_ an IDE integration is not available or suitable.
- **Rule 2.2 (Nx Commands):** MUST prefer Nx integrated commands for core development tasks like running (`nx serve`), building (`nx build`), testing (`nx test`), linting (`nx lint`), and end-to-end testing (`nx e2e`) whenever applicable within the monorepo context. _See Rule 3 regarding IDE preference._

## 3. Workflow & IDE Interaction

- **Rule 3.1 (Prefer IDE Actions):** MUST prioritize suggesting actions through the VS Code UI, integrated extensions (e.g., Nx Console, vscode Git, Docker extension), or pre-defined VS Code Tasks (`tasks.json`) over raw terminal commands whenever possible and equivalent.
- **Rule 3.2 (Minimize Terminal Use):** Limit suggestions for terminal commands to essential operations that are not easily or efficiently handled by the IDE UI or extensions (e.g., complex Git operations, specific `pnpm` commands, `pulumi up/preview`, initial setup commands).
- **Rule 3.3 (Example - Nx Console):** For common Nx tasks like generating components/libraries, running targets (build, serve, test), or visualizing the graph, MUST prefer suggesting interaction via the Nx Console VS Code extension over typing `nx ...` commands in the terminal.

## 4. Scaffolding & Code Generation

- **Rule 4.1 (Nx Generators):** MUST use official or project-specific Nx generators (`nx generate ...` or `nx g ...`), ideally triggered via the Nx Console extension (See Rule 3.3), for creating standard project structures.
- **Rule 4.2 (No Manual Scaffolding):** MUST NOT suggest manually creating files and directories for structures that can be generated via Nx.

## 5. Testing

- **Rule 5.1 (Unit/Integration Tests):** MUST use `Jest` or `Vitest` (based on project configuration). Test files should follow the `*.spec.ts` or `*.test.ts` convention.
- **Rule 5.2 (E2E Tests):** MUST use `Playwright`.
- **Rule 5.3 (Test Execution):** MUST execute tests via Nx commands (`nx test <project>`, `nx e2e <project-e2e>`), preferably triggered via the IDE (Nx Console or VS Code Testing tab) where possible.

## 6. Linting & Formatting

- **Rule 6.1 (ESLint & Prettier):** MUST adhere to the project's root `ESLint` and `Prettier` configurations. Suggestions should be compatible.
- **Rule 6.2 (Execution via IDE/Hooks):** MUST assume linting and formatting are primarily triggered on save (via VS Code settings) or via pre-commit hooks (Husky + lint-staged), rather than manual terminal commands.

## 7. Backend Development

- **Rule 7.1 (NestJS Framework):** MUST assume the backend framework is `NestJS`. Suggestions should relate to NestJS concepts.
- **Rule 7.2 (TypeScript):** MUST use `TypeScript`.

## 8. Frontend Development

- **Rule 8.1 (Next.js/React Framework):** MUST assume the frontend framework is `Next.js` with `React`. Suggestions should align with Next.js/React patterns.
- **Rule 8.2 (TypeScript):** MUST use `TypeScript` (`.tsx`, `.ts`).

## 9. UI & Styling

- **Rule 9.1 (Shadcn/ui Components):** MUST prefer using components from the `Shadcn/ui` library.
- **Rule 9.2 (Tailwind CSS):** MUST use `Tailwind CSS` utility classes. MUST NOT suggest alternatives unless part of the setup.

## 10. Infrastructure & Cloud

- **Rule 10.1 (IaC - Pulumi):** MUST use `Pulumi` with `TypeScript`. Suggestions should involve writing Pulumi code.
- **Rule 10.2 (Cloud Provider - GCP):** MUST assume `GCP`. Suggestions should leverage relevant GCP services.
- **Rule 10.3 (No Alternatives):** MUST NOT suggest Terraform, AWS, Azure, or manual console operations for infra management.

## 11. Version Control

- **Rule 11.1 (Git):** MUST assume `Git`.
- **Rule 11.2 (Conventional Commits):** MUST suggest or generate commit messages following the `Conventional Commits` specification.
- **Rule 11.3 (IDE Integration):** Prefer using VS Code's integrated Source Control panel or GitLens for common Git actions (staging, committing, viewing history) over terminal commands where practical.

## 12. Documentation

- **Rule 12.1 (Docusaurus/Markdown):** MUST prefer `Docusaurus` and `Markdown`.
- **Rule 12.2 (Diagrams - Mermaid):** MUST use `Mermaid.js` syntax for diagrams within Markdown.

## 13. General

- **Rule 13.1 (Existing Configuration):** Assume standard configurations exist based on the established stack.
- **Rule 13.2 (Simplicity & Relevance):** Prioritize direct, relevant suggestions using the defined stack.

## 14. Gitflow Workflow

- **Rule 14.1 (Gitflow Adherence):** MUST adhere to the Gitflow workflow and branch ruleset as described in `projectConfiguration.md`.
- **Rule 14.2 (Pull Request CI):** MUST ensure that all pull requests to `main` pass the automated CI checks defined in `.github/workflows/ci.yml`.

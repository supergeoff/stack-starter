# Contributing to the Technical Accelerator Project

We welcome contributions to the Technical Accelerator project! This document outlines the guidelines for contributing to the project.

## How to Contribute

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise commit messages following the Conventional Commits specification.
4.  Test your changes thoroughly.
5.  Submit a pull request.

## Setting up the Project

To contribute to the project, we recommend using the provided Devcontainer.

### Prerequisites

- [VS Code](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/)
- The Remote - Containers extension for VS Code

### Launching the Devcontainer

1.  Clone the repository to your local machine.
2.  Open the cloned repository in VS Code.
3.  VS Code should detect the Devcontainer configuration and prompt you to "Reopen in Container". Click this prompt.
4.  If you are not prompted, you can manually launch the Devcontainer by running the "Reopen in Container" command in VS Code.
5.  VS Code will then start the Devcontainer, which may take a few minutes. Once the Devcontainer is running, you will have a fully configured development environment.

### After starting the Devcontainer

1.  Open the project in VS Code.
2.  The Devcontainer will automatically start and install the necessary dependencies. If it doesn't, you can manually start it by running the "Reopen in Container" command in VS Code.
3.  Run `pnpm install` to install the dependencies.

## Using Nx

This project uses [Nx](https://nx.dev/) to manage the monorepo. We highly recommend installing the [Nx Console](https://nx.dev/getting-started/editor-setup) extension for VS Code to improve your developer experience.

You can use the following Nx commands to contribute to the project:

- `npx nx build <project-name>`: Build a project.
- `npx nx test <project-name>`: Test a project.
- `npx nx lint <project-name>`: Lint a project.
- `npx nx e2e <project-name>`: Run end-to-end tests for a project.

Or use the nx console to specify and run commands

## Cline Configuration

To contribute to this project using Cline, you will need to configure the following:

### API Key Setup

1.  Obtain an API key from [API Provider].
2.  Set the API key in your Cline extension.

### Memory Bank Configuration

1.  Deactivate the local `_memory-bank` rule. This ensures that you are only using the global memory bank.
2.  Before starting work, ask Cline to read the memory bank to understand the project context.
3.  After completing your work, ask Cline to update the memory bank to reflect your changes.

### MCP Server Configuration

This project utilizes MCP servers to provide additional tools and resources. To use MCP servers, ensure they are running and properly configured in your environment.

Nx provides a local MCP server. To configure it, add the following to your Cline settings:

```json
{
  "mcpServers": {
    "nx-mcp": {
      "url": "http://localhost:9772/sse",
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

## Linting & Formatting

- MUST adhere to the project's root `ESLint` and `Prettier` configurations. Suggestions should be compatible.
- MUST assume linting and formatting are primarily triggered on save (via VS Code settings) or via pre-commit hooks (Husky + lint-staged), rather than manual terminal commands. Ensure your IDE is configured to automatically format code on save to adhere to the project's Prettier configuration.

## License

By contributing to this project, you agree to license your contributions under the project's license.

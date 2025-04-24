# Technical Accelerator

## Overview

This project is a **Technical Accelerator** consisting of a **reusable project template** and a **functional demonstrator application**. The main purpose is to **significantly reduce the time and effort** required to start new projects, ensure adherence to **best practices** (Developer Experience, Security, Observability, Automation), and promote **technical consistency** across teams within the organization. The demonstrator app (an AI Proxy API + Chat Interface) serves as tangible proof of the template's capabilities.

## Prerequisites

To work on this project, you will need:

- [VS Code](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/)
- The Remote - Containers extension for VS Code

## Launching the Devcontainer

1.  Clone the repository to your local machine.
2.  Open the cloned repository in VS Code.
3.  VS Code should detect the Devcontainer configuration and prompt you to "Reopen in Container". Click this prompt.
4.  If you are not prompted, you can manually launch the Devcontainer by running the "Reopen in Container" command in VS Code.
5.  VS Code will then start the Devcontainer, which may take a few minutes. Once the Devcontainer is running, you will have a fully configured development environment.

## Cline Configuration

To contribute to this project using Cline, you will need to configure the technical stack and rules in the `.clinerules` folder.
Update the `.clinerules/projectConfiguration.md` to match your project's requirements. Then ask Cline to update the `.clinerules/clineContributing.md`.

## Setting up the Project

To set up the project for the first time, follow these steps:

1.  Adapt the brief in `memory-bank/projectBrief.md` for the intent of your new project.
2.  Delete all other files from the `memory-bank` directory.
3.  Ask Cline to initialize the memory bank.

See [CONTRIBUTING.md](CONTRIBUTING.md) for information on how to contribute to this project.

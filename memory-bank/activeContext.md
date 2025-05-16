# Active Context

_Current work focus, recent changes, next steps, active decisions, important
patterns, learnings._

Current work focus is on the initial setup of the project, including fixing the
documentation build bug, adding basic documentation, and resolving issues with
serving the 'server' application.

Recent changes include setting up the Docusaurus site using the nx plugin
(nx-extend/docusaurus) in the apps/docs directory, fixing the documentation
build bug in the CI, adding basic documentation, resolving a NestJS dependency
issue in the 'server' application by changing an import type, and fixing a file
watching issue for the 'server' application by switching the serve executor to
`webpack:webpack` due to a known Nx bug.

Next steps include continuing with the project setup and development of the AI
Proxy API and Chat interface.

Active decisions include using the nx plugin (nx-extend/docusaurus) for
Docusaurus setup and using the `webpack:webpack` executor for serving the
'server' application to enable file watching.

Important patterns include following the instructions in the
.clinerules/memory-bank.md file for updating the memory bank and identifying
workarounds for known issues in tools like Nx.

Learnings include the importance of keeping the memory bank up to date with
accurate and detailed information and being aware of potential bugs and
workarounds in development tools.

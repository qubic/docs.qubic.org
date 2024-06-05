# Qubic Docs Readme

Qubic's Docs are built using [Docusaurus 3](https://docusaurus.io/) with `pnpm`.

## Local Development

To set up the Qubic Docs site locally:

- copy the repo using `git clone git@github.com:qubic/docs.git`
- install dependencies using `pnpm install`
- make your changes and updates as needed
- run the local development server using `pnpm start` to test site
- build locally via `pnpm build`

> Note: After cloning the repo to your local machine, all the local development commands are run from within this `docs.qubic.org` directory.

## Deployment

For deployment a push to github is sufficient. A build is automatically initiated. If the build succeeds, the project is deployed to the qubic.org server.
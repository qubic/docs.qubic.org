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

## Updating Documentation

Anyone who wants to update the documentation can open a pull request for the Qubic team to review. Here's a guide on how to do that:

1. Fork the Repository:
   - Navigate to https://github.com/qubic/docs
   - Click the "Fork" button at the top right

2. Clone Your Forked Repository:
   ```
   git clone git@github.com:your-username/docs.git
   cd docs
   ```

3. Update or Add .md Files:
   - Navigate to the appropriate directory (e.g., `cd docs/your-section`)
   - Replace or add .md files as needed

   > Note: The 'overview' directory mentioned in the sidebar example is just that - an example. Your changes may be in a different section of the documentation.

4. Update the Sidebars (if necessary):
   - Open `sidebars.js`
   - Update the relevant sidebar section to include new .md files. For example:
     ```javascript
     const sidebars = {
       // ... other sidebars ...
       exampleSidebar: [
         {
           type: 'category',
           label: 'Your Section',
           items: [
             'your-section/file1',
             'your-section/file2',
             // ... other files ...
           ],
         },
       ],
       // ... other sidebars ...
     };
     ```

5. Create a Pull Request:
   ```
   git add .
   git commit -m "Update documentation for [your section]"
   git checkout -b update-docs-[your-section]
   git push origin update-docs-[your-section]
   ```
   - Go to your repository on GitHub
   - Click on "Compare & pull request"
   - Add a title and description
   - Click "Create pull request"

> Disclaimer: All pull requests will be reviewed by the Qubic team before being merged. We appreciate your contributions to improving our documentation!

## Deployment

For deployment a push to github is sufficient. A build is automatically initiated. If the build succeeds, the project is deployed to the qubic.org server.

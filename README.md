# DX Website

This Vite + React website deploys to GitHub Pages through the workflow in
`.github/workflows/deploy.yml`.

## Publish

1. Create a GitHub repository and push this directory to its `main` branch.
2. In **Settings → Pages**, select **GitHub Actions** as the publishing source.
3. The **Deploy website to GitHub Pages** workflow will build and publish the
   site automatically. The site is available from the deployment URL shown by
   the workflow or in **Settings → Pages**.

The workflow automatically uses the correct Vite asset path for either a
project site (`https://OWNER.github.io/REPOSITORY/`) or a user site
(`https://OWNER.github.io/`).

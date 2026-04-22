---
description: How to build and deploy the Afrodisiaca Dani website to production.
---

# Deployment Workflow

Follow these steps to build and deploy the website to your production server.

### 1. Build the Project
Run the build command to generate a production-ready bundle.
```bash
npm run build
```
This will create a `dist/` directory in the root of your project.

### 2. Verify the Build (Optional)
You can preview the production build locally to ensure everything is correct:
```bash
npm run preview
```

### 3. Upload to Server
Upload the **contents** of the `dist/` folder to your web server's public directory (usually `public_html` or `www`).

> [!IMPORTANT]
> Ensure that the `gallery/` folder (located inside `dist/`) is uploaded along with the other files, as it contains all the images.

### 4. Configure Domain
Ensure your domain is pointing to the directory where you uploaded the files. Since this is a static site (Vite/React), no further server-side configuration is typically needed unless you use client-side routing (not the case for this single-page site).

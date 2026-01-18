# Deployment Guide

This guide explains how to deploy the Lab Experiments to GitHub Pages using automated workflows.

## 🚀 Quick Start

### 1. Initial Repository Setup

Since you've already created the repository `full-stack-frameworks-lab-manual` on GitHub, follow these steps:

#### Initialize Git (if not already done)
```bash
cd "e:\Full Stack\Full Stack Frameworks Notes\Lab Experiments"
git init
```

#### Add all files
```bash
git add .
```

#### Create initial commit
```bash
git commit -m "Initial commit: Add all lab experiments with GitHub Pages deployment"
```

#### Add remote origin
```bash
git remote add origin https://github.com/veankatakrishnan/full-stack-frameworks-lab-manual.git
```

#### Push to GitHub
```bash
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/veankatakrishnan/full-stack-frameworks-lab-manual`
2. Click on **Settings** (top menu)
3. In the left sidebar, click on **Pages**
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. The workflow will automatically trigger on the next push

### 3. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 2-3 minutes)
4. Once complete, your site will be live at: `https://veankatakrishnan.github.io/full-stack-frameworks-lab-manual/`

## 📋 How It Works

### Automated Deployment Workflow

The `.github/workflows/deploy.yml` file contains a GitHub Actions workflow that:

1. **Triggers** on every push to the `main` branch
2. **Builds** all 5 experiments in parallel
3. **Combines** all build outputs with the landing page
4. **Deploys** everything to GitHub Pages

### Build Process

For each experiment (expt-01 through expt-05):
1. Install dependencies (`npm ci`)
2. Run build command (`npm run build`)
3. Output goes to `dist/` directory

### Deployment Structure

```
GitHub Pages Root
├── index.html              # Landing page
├── expt-01/               # Experiment 01 build
├── expt-02/               # Experiment 02 build
├── expt-03/               # Experiment 03 build
├── expt-04/               # Experiment 04 build
└── expt-05/               # Experiment 05 build
```

### URLs

- **Main Landing Page**: `https://veankatakrishnan.github.io/full-stack-frameworks-lab-manual/`
- **Experiment 01**: `https://veankatakrishnan.github.io/full-stack-frameworks-lab-manual/expt-01/`
- **Experiment 02**: `https://veankatakrishnan.github.io/full-stack-frameworks-lab-manual/expt-02/`
- **Experiment 03**: `https://veankatakrishnan.github.io/full-stack-frameworks-lab-manual/expt-03/`
- **Experiment 04**: `https://veankatakrishnan.github.io/full-stack-frameworks-lab-manual/expt-04/`
- **Experiment 05**: `https://veankatakrishnan.github.io/full-stack-frameworks-lab-manual/expt-05/`

## 🔄 Making Updates

### To update any experiment:

1. Make your changes locally
2. Test locally with `npm run dev`
3. Commit your changes:
```bash
git add .
git commit -m "Description of changes"
```
4. Push to GitHub:
```bash
git push
```
5. The workflow will automatically rebuild and redeploy

## 🛠️ Manual Deployment (Optional)

If you need to deploy manually without GitHub Actions:

### Build all experiments
```bash
# In each experiment directory
cd expt-01 && npm run build && cd ..
cd expt-02 && npm run build && cd ..
cd expt-03 && npm run build && cd ..
cd expt-04 && npm run build && cd ..
cd expt-05 && npm run build && cd ..
```

### Create deployment directory
```bash
mkdir -p _site
cp index.html _site/
cp -r expt-01/dist _site/expt-01
cp -r expt-02/dist _site/expt-02
cp -r expt-03/dist _site/expt-03
cp -r expt-04/dist _site/expt-04
cp -r expt-05/dist _site/expt-05
```

### Deploy using gh-pages package
```bash
npx gh-pages -d _site
```

## ⚙️ Configuration Files

### Vite Configuration
Each experiment has a `vite.config.js` with the correct base path:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/full-stack-frameworks-lab-manual/expt-XX/',
})
```

This ensures all assets load correctly on GitHub Pages.

### GitHub Actions Workflow
The workflow file `.github/workflows/deploy.yml` handles:
- Node.js setup
- Dependency caching
- Building all experiments
- Deploying to GitHub Pages

## 🐛 Troubleshooting

### Workflow fails
- Check the Actions tab for error messages
- Ensure all experiments build successfully locally
- Verify `package.json` and `package-lock.json` are committed

### Assets not loading
- Verify the `base` path in `vite.config.js` matches your repository name
- Check browser console for 404 errors
- Ensure the workflow completed successfully

### Pages not updating
- Clear browser cache
- Wait a few minutes for GitHub Pages to update
- Check if the workflow completed successfully

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

**Happy Deploying! 🚀**

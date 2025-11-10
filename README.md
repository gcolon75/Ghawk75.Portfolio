# Ghawk75.Portfolio

My website for showcasing my projects and skills.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Architecture

This portfolio uses a centralized data structure for maintainability and consistency:

- **`src/data/projects.json`**: Single source of truth for all project data
- **`src/components/ProjectCard.js`**: Reusable project card component
- **`src/components/SEO.js`**: SEO and structured data helper
- **Problem → Approach → Result pattern**: Every project follows this storytelling structure

See **[CONTRIBUTING.md](CONTRIBUTING.md)** for detailed information on adding new projects.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run deploy`

Deploys the built app to GitHub Pages.

## AI Orchestrator

This portfolio includes documentation for the **Project Valine AI Orchestrator**, which has been consolidated into the [ghawk75-ai-agent](https://github.com/gcolon75/ghawk75-ai-agent) repository.

For full details about the orchestrator, including:
- Deployment and integration guides
- Canonical endpoints and configuration
- Verification checklist

See **[docs/ORCHESTRATOR.md](docs/ORCHESTRATOR.md)**.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

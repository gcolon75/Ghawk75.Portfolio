# Contributing to Ghawk75.Portfolio

Thank you for your interest in contributing! This portfolio website is primarily a personal project, but contributions are welcome.

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion:
1. Check if an issue already exists
2. If not, create a new issue with:
   - Clear description of the problem or suggestion
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots if applicable

### Pull Requests

If you'd like to submit a pull request:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes**:
   - Keep changes focused and minimal
   - Follow the existing code style
   - Test your changes locally
4. **Test the build**: Run `npm run build` to ensure no errors
5. **Commit your changes**: Use clear, descriptive commit messages
6. **Push to your fork**: `git push origin feature/your-feature-name`
7. **Open a Pull Request** with:
   - Clear description of changes
   - Why the changes are needed
   - Any relevant issue numbers

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Build for production: `npm run build`

## Code Style

- Follow React best practices
- Use functional components with hooks
- Keep components focused and reusable
- Use descriptive variable and function names
- Add comments for complex logic

## Testing

- Test your changes locally before submitting
- Ensure the build completes successfully
- Test in multiple browsers if possible
- Check responsive design on different screen sizes

## Project Structure

- `/src/components` - React components
- `/src/assets` - Images, PDFs, and other static assets
- `/src/data` - Centralized project data (projects.json)
- `/docs` - Documentation files
- `/public` - Public assets and HTML template

## Adding a New Project

The portfolio uses a centralized data structure for all projects. To add a new project:

### Step 1: Add Project Data

Edit `/src/data/projects.json` and add a new project object following this structure:

```json
{
  "id": "unique-project-id",
  "title": "Project Title",
  "year": 2024,
  "type": "game|design|website|tool",
  "summary": "Brief summary (≤ 260 chars for SEO)",
  "tagline": "Short compelling tagline",
  "problem": "What problem does this solve?",
  "approach": "How did you approach the solution?",
  "result": "What was the outcome/impact?",
  "role": "Your role(s) on the project",
  "whatISpecificallyDid": [
    "Specific contribution 1",
    "Specific contribution 2"
  ],
  "techStack": ["Technology 1", "Technology 2"],
  "tags": {
    "disciplines": ["UX Design", "Game Design"],
    "tools": ["Figma", "Unity"],
    "specialties": ["Systems Design"]
  },
  "internalLink": "/projects/unique-project-id",
  "externalLinks": [
    {
      "url": "https://example.com",
      "title": "View Live Site",
      "type": "website"
    }
  ],
  "assets": [
    {
      "type": "image",
      "path": "../assets/project-image.jpg",
      "alt": "Project screenshot"
    }
  ],
  "privacyFlags": ["academic-project"],
  "featured": false
}
```

### Step 2: Add Project Assets

1. Add images, videos, or documents to `/src/assets/`
2. Reference them in the project's `assets` array
3. Use descriptive, privacy-safe alt text for images

### Step 3: Create Project Detail Page (Optional)

If you need a custom detail page beyond the standard layout:

1. Create `/src/components/ProjectXPage.js` (where X is the next number)
2. Import the project data from `/src/data/projects.json`
3. Use the SEO component for better search engine visibility
4. Add the route to `/src/App.js`

### Step 4: Test Your Changes

1. Start the development server: `npm start`
2. Verify the project appears in the projects list
3. Test the filter functionality
4. Check mobile responsiveness
5. Build for production: `npm run build`

### Project Data Guidelines

**Problem → Approach → Result Pattern:**
- **Problem**: Clearly state the issue or need
- **Approach**: Describe your methodology and process
- **Result**: Highlight measurable or directional outcomes

**Privacy & Confidentiality:**
- Use `privacyFlags` to note sensitivity level
- Avoid proprietary metrics or internal architecture
- Use qualitative descriptions when quantitative data isn't shareable

**Tech Stack:**
- Be specific (e.g., "Python 3.11" not just "Python")
- Include frameworks, tools, and platforms
- Limit to 4-6 most relevant technologies for card display

**Featured Projects:**
- Set `featured: true` for your best 3-4 projects
- These will be highlighted in the UI with a star icon

## Questions?

If you have questions about contributing, feel free to open an issue for discussion.

## License

By contributing, you agree that your contributions will be licensed under the same license as this project.

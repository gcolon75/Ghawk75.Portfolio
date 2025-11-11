# Project Data Schema Reference

Quick reference for adding or editing projects in `src/data/projects.json`.

## Required Fields

| Field | Type | Example | Description |
|-------|------|---------|-------------|
| `id` | string | `"tower-of-greed"` | Unique identifier (kebab-case) |
| `title` | string | `"Tower of Greed"` | Display title |
| `year` | number | `2025` | Year created/completed |
| `type` | string | `"game"` | Category: game, design, website, tool |
| `summary` | string | `"A dice-driven..."` | Brief description (≤260 chars) |
| `problem` | string | | What problem does it solve? |
| `approach` | string | | How did you solve it? |
| `result` | string | | What was the outcome? |
| `role` | string | `"Game Designer"` | Your role(s) |
| `whatISpecificallyDid` | array | `["Designed...", "Created..."]` | Your specific contributions |
| `techStack` | array | `["Python", "React"]` | Technologies used |
| `tags` | object | See Tags section below | Categorized skills/tech |
| `internalLink` | string | `"/projects/tower-of-greed"` | Link to detail page |
| `externalLinks` | array | See Links section | External resources |
| `assets` | array | See Assets section | Images, videos, docs |
| `privacyFlags` | array | `["concept-only"]` | Privacy considerations |
| `featured` | boolean | `true` or `false` | Highlight this project? |

## Optional Fields

| Field | Type | When to Use |
|-------|------|-------------|
| `phase` | string | For in-progress projects (e.g., "Concept / Design") |
| `progress` | number | Completion percentage (0-1, e.g., 0.20 = 20%) |
| `lastUpdated` | string | Last update date for in-progress projects |
| `tagline` | string | Short compelling tagline for detail page |

## Tags Object Structure

```json
{
  "tags": {
    "languages": ["Python", "JavaScript"],      // Programming languages
    "technologies": ["React", "Discord API"],   // Frameworks/APIs
    "disciplines": ["UX Design", "Game Design"], // Design disciplines
    "tools": ["Figma", "Unity"],                // Software tools
    "genres": ["Roguelike", "RPG"],             // Game genres
    "specialties": ["Systems Design"]           // Special focus areas
  }
}
```

## External Links

```json
{
  "externalLinks": [
    {
      "url": "https://github.com/user/repo",
      "title": "GitHub Repository",
      "type": "github"  // github, website, slides, spreadsheet, demo, other
    }
  ]
}
```

## Assets

```json
{
  "assets": [
    {
      "type": "image",              // image, video, document
      "path": "../assets/hero.jpg", // Relative path from component
      "alt": "Project screenshot"   // For images only
    },
    {
      "type": "document",
      "path": "../assets/slides.pdf",
      "title": "Project Slides",
      "download": true              // Optional: prompt download
    }
  ]
}
```

## Privacy Flags

Common values:
- `"concept-only"` - Design concept, no implementation
- `"in-development"` - Active development
- `"private-testing"` - Limited test group
- `"no-metrics"` - No performance data shared
- `"academic-project"` - School/university project
- `"client-project"` - Client work
- `"public-repo"` - Open source

## Content Guidelines

### Problem Statement
- What user/business need exists?
- What pain point or gap?
- Be specific and relatable

**Example:**
> "Most roguelikes rely heavily on RNG, leaving players feeling powerless."

### Approach
- Your methodology and process
- Key decisions and why
- Technical implementation highlights
- Focus on YOUR actions

**Example:**
> "Designed a customizable Attack Die system with attunement capacity and shard upgrades..."

### Result
- Measurable or directional outcomes
- Impact on users/business
- What was achieved
- Use qualitative descriptions if quantitative data is sensitive

**Example:**
> "Created a concept that emphasizes tactical dice-building through smart sequencing."

### What I Specifically Did
- Use action verbs
- Be specific about ownership
- Distinguish your work from team contributions
- Highlight technical skills

**Good Examples:**
- "Designed core dice mechanics and progression systems"
- "Implemented market pipelines and indicator calculations"
- "Led user research interviews with 15+ participants"

**Avoid:**
- "Worked on the project"
- "Helped with design"
- Generic team descriptions

## Validation Checklist

Before adding a new project:

- [ ] Unique `id` (no spaces, use kebab-case)
- [ ] Summary is ≤ 260 characters
- [ ] Problem → Approach → Result all filled
- [ ] At least 2 items in `whatISpecificallyDid`
- [ ] Tech stack has 3-8 items
- [ ] Privacy flags appropriate
- [ ] No sensitive metrics or proprietary info
- [ ] Images exist in `src/assets/`
- [ ] Internal link matches route in App.js
- [ ] Featured: only 3-4 projects should be featured

## Example: Complete Project Entry

```json
{
  "id": "my-project",
  "title": "My Awesome Project",
  "year": 2024,
  "type": "website",
  "summary": "A platform that helps users discover and connect with local communities.",
  "tagline": "Building bridges in your neighborhood",
  "problem": "People struggle to find and join local community groups and events.",
  "approach": "Developed a geo-based discovery platform with interest matching, event calendar, and community forums.",
  "result": "Launched beta with 500+ users, facilitating 200+ community connections in first month.",
  "role": "Full Stack Developer, UX Designer",
  "whatISpecificallyDid": [
    "Designed and implemented geolocation-based discovery algorithm",
    "Created responsive UI with accessibility features",
    "Conducted user testing with 20+ participants",
    "Optimized database queries reducing load time by 60%"
  ],
  "techStack": ["React", "Node.js", "PostgreSQL", "Mapbox", "Figma"],
  "tags": {
    "languages": ["JavaScript", "SQL"],
    "technologies": ["React", "Node.js", "PostgreSQL"],
    "tools": ["Figma", "Mapbox"],
    "disciplines": ["Full Stack Development", "UX Design"]
  },
  "internalLink": "/projects/my-project",
  "externalLinks": [
    {
      "url": "https://github.com/user/my-project",
      "title": "View Code",
      "type": "github"
    }
  ],
  "assets": [
    {
      "type": "image",
      "path": "../assets/my-project-hero.jpg",
      "alt": "My Project interface"
    }
  ],
  "privacyFlags": ["public-repo"],
  "featured": true
}
```

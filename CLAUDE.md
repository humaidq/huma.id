# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Humaid Alqasimi's personal website built with Astro.js. The site includes blog posts, project showcases, recipes, and general information. The project has recently migrated from Hugo to Astro.js.

## Development Commands

- `npm run dev` - Start development server with host binding
- `npm run start` - Start development server (alias for dev)
- `npm run build` - Run type checking and build the site
- `npm run preview` - Preview built site with host binding
- `astro check` - Run Astro's TypeScript checking

## Architecture & Structure

### Content Collections

The site uses Astro's content collections system defined in `src/content/config.ts`:

- **Blog** (`src/content/blog/`): Articles with title, description, pubDate, updatedDate, heroImage
- **Projects** (`src/content/projects/`): Project showcases with metadata like gitURL, license, programming language, etc.
- **Recipes** (`src/content/recipes/`): Cooking recipes with title, description, date

### Page Routing

Dynamic routes handle content collections:
- `[blog].astro` - Individual blog posts
- `[project].astro` - Individual project pages  
- `[recipe].astro` - Individual recipe pages

Static pages:
- `index.astro` - Homepage with personal info and schema.org structured data
- `blog.astro`, `projects.astro`, `recipes.astro` - Collection listing pages
- `now.astro` - Current status page

### Layouts

- `DefaultPage.astro` - Base layout for static pages
- `BlogPost.astro` - Layout for blog articles
- `ProjectPost.astro` - Layout for project pages with special components in `ProjectComponents/`

### Integrations & Features

- **MDX** for enhanced markdown content
- **Solid.js** for interactive components (configured with JSX import source)
- **Sitemap** generation
- **RSS feed** at `/index.xml.js`
- **Extensive URL redirects** defined in astro.config.mjs for legacy Hugo URLs
- **Prefetch all pages** enabled for performance

### Build System

The project uses Nix flakes for reproducible builds:
- `nix build` - Build the complete site
- `nix develop` - Enter development environment (or use nix-direnv)

### Styling

- `src/styles/global.css` - Global styles
- `src/styles/recipes.css` - Recipe-specific styles
- Uses Inter font family and normalize.css

## Key Technical Details

- Content is in MDX format supporting both Markdown and JSX components
- TypeScript configured with strict null checks and Solid.js JSX
- Recipe components use temperature and unit conversion utilities
- Shiki syntax highlighting with "dark-plus" theme
- Site URL configured as https://huma.id
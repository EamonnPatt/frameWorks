# Cosmic Café
http://localhost:8080
Cosmic Café is a small Eleventy (11ty) site showcasing modern static site practices:

- Nunjucks templates and reusable layouts/components
- Collections and paginated listing pages
- Markdown content with front matter metadata
- Static assets pipeline (passthrough copy for CSS/assets)
- Build and local dev server commands

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the local dev server with live reload:

   ```bash
   npm run serve
   ```

   Open `http://localhost:8080`.

3. Build the production site:

   ```bash
   npm run build
   ```

   The output will be in `_site/`.

## Project Structure

```
CosmicCafe/
  eleventy.config.js        # 11ty configuration
  package.json              # npm scripts and dev dependency
  src/                      # source content and templates
    assets/                 # static files (copied as-is)
      css/
        style.css
    includes/
      layouts/
        components/
          header.njk
          footer.njk
        base.njk
        post.njk
    posts/                  # markdown posts (collection: posts)
      first.md
      second.md
    index.njk               # homepage
    blog.njk                # paginated listing of posts
    about.md                # sample content page
```

## Key Concepts Demonstrated

- Nunjucks templating via `base.njk` and `post.njk` layouts; `header.njk` and `footer.njk` components reused across pages for consistency.
- Collections: `posts` is defined in `eleventy.config.js` and sourced from `src/posts/*.md`.
- Pagination: `src/blog.njk` paginates through `collections.posts` with a size of 5.
- Front matter: every Markdown post includes `title`, `description`, `date`, and `tags` (including `posts`).
- Static assets: `src/assets` is copied to `_site/assets` via passthrough copy.
- Build process: `npm run build` compiles the site; `npm run serve` starts a live-reload dev server.

## Maintenance Guidance

- Adding a new post: create a new Markdown file in `src/posts/` with front matter including `tags: [posts]` and a valid `date`.
- Changing site styles: edit `src/assets/css/style.css`; Eleventy will passthrough-copy it on build/serve.
- Updating layouts/components: edit files in `src/includes/layouts/` and its `components/` directory. All pages inheriting `base.njk` will reflect changes automatically.
- Pagination size or path: update the front matter in `src/blog.njk` to change page size or URLs.
- Collections logic: refine sorting or filtering in `eleventy.config.js` if needed.

## Notes on Scope Changes

If your project scope diverged from an earlier plan (e.g., Lab 1), document:

- What changed (features added/removed)
- Why it changed (requirements, time, better UX)
- Any migration notes (content moved, URL structure changes)

Record these decisions here to keep future maintainers informed.

## References

- 11ty Documentation: https://www.11ty.dev/docs/




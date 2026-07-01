# 🚀 Content Editor Guide

Welcome to your Astro portfolio! This guide explains how to add new Blog posts, Project posts, and how to use the interactive MDX UI components.

## 📝 1. Adding a Blog Post
Create a new `.mdx` file inside `src/content/blog/`. The filename will become the URL (e.g., `my-post.mdx` becomes `/blog/my-post`).

Every post **must** have this YAML frontmatter at the very top:
```mdx
---
title: "Your Post Title"
description: "A short snippet describing the post."
pubDate: 2026-07-01
author: "Chris"
tags: ["Astro", "Tutorial"]
image: "/images/custom-cover.jpg" # Optional: OpenGraph SEO cover image
---

> **Note on SEO Images**: The `image` property is entirely optional! If you leave it out, the site will automatically generate a fallback placeholder image for you when you share the link on LinkedIn or Discord.
```
Below the `---`, you can write standard Markdown!

## 🛠 2. Adding a Project
Create a new `.mdx` file inside `src/content/projects/`. 

Every project **must** have this frontmatter:
```mdx
---
title: "My Awesome App"
description: "What the app does."
completionDate: 2026-06-15
techStack: ["Next.js", "Tailwind CSS", "Stripe API"]
link: "https://github.com/your-profile"
image: "/images/project-screenshot.png" # Optional: SEO cover image
---

> **Note on SEO Images**: Just like blog posts, the `image` property is optional. If provided, it will be used as the preview card when sharing this specific project on social media.
```

## ✨ 3. Using Interactive MDX Components

Because this site uses Astro's MDX engine, you can drop actual UI components directly into your markdown!

### The Callout Component
Use this to highlight tips, warnings, or notes.
First, **import it right below your frontmatter**, then use it anywhere in the body!

```mdx
import Callout from '../../components/mdx/Callout.astro';

<Callout type="info" title="Did you know?">
  This is a blue informational callout.
</Callout>

<Callout type="success" title="Success!">
  This is a green success callout.
</Callout>

<Callout type="warning" title="Warning!">
  This is a yellow warning callout.
</Callout>

<Callout type="danger" title="Error">
  This is a red danger callout.
</Callout>
```

### The Mac OS Code Block
You do **not** need to import anything for code blocks! 
Just use standard markdown code fences (with three backticks) and specify the language. The site automatically intercepts it and wraps it in the beautiful Mac OS window UI.

\`\`\`javascript
const greeting = "The Mac OS UI will wrap this automatically!";
console.log(greeting);
\`\`\`

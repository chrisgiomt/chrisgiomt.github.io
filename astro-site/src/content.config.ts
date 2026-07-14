import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

// Define the 'blog' collection using Astro 5's new content layer loader
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), // Safely parse strings to Date objects
    author: z.string().default('Chris'),
    tags: z.array(z.string()).optional(),
    image: image().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

// Define the 'projects' collection for portfolio items
const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    completionDate: z.coerce.date(),
    techStack: z.array(z.string()),
    link: z.string().url().optional(), // e.g. Live site or GitHub
    image: image().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
  'projects': projectsCollection,
};

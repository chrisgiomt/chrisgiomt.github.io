import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

// Define the 'blog' collection using Astro 5's new content layer loader
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.coerce.string().trim().min(1),
    description: z.coerce.string().trim().min(1),
    pubDate: z.union([z.string(), z.number(), z.date()]).pipe(z.coerce.date()).refine((d) => !isNaN(d.getTime()), { message: "Invalid date string" }),
    author: z.coerce.string().trim().min(1).default('Chris'),
    tags: z.array(z.coerce.string().trim().min(1)).min(1).optional(),
    image: image().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

// Define the 'projects' collection for portfolio items
const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.coerce.string().trim().min(1),
    description: z.coerce.string().trim().min(1),
    completionDate: z.union([z.string(), z.number(), z.date()]).pipe(z.coerce.date()).refine((d) => !isNaN(d.getTime()), { message: "Invalid date string" }),
    techStack: z.array(z.coerce.string().trim().min(1)).min(1),
    link: z.string().url().or(z.literal('')).nullish(), // Optional link that accepts empty strings
    image: image().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
  'projects': projectsCollection,
};

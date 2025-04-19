import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),

    redirectToGit: z.boolean().optional(),
    goDoc: z.boolean().optional(),
    latestVersion: z.string().optional(),
    proprietary: z.boolean().optional(),
    projectURL: z.string().optional(),
    notAccepting: z.boolean().optional(),
    copyrightHolder: z.string().optional(),
    creator: z.string().optional(),
    license: z.string().optional(),
    programmingLanguage: z.string().optional(),
    gitURL: z.string().optional(),
    headings: z.any().optional(),
  }),
});
const recipes = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { blog, projects, recipes };

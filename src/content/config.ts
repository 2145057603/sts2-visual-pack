import { defineCollection, z } from 'astro:content';

const modsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'mod-skin',
      'card-skin',
      'relic-skin',
      'ui-mod',
      'gameplay-mod',
      'other',
    ]),
    tags: z.array(z.string()).default([]),
    cover: z.string(),
    images: z.array(z.string()).default([]),
    description: z.string().max(300),
    author: z.string(),
    version: z.string().default('1.0.0'),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    downloadUrl: z.string().url(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  mods: modsCollection,
};

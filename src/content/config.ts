import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const cursos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    price: z.string(),
    checkoutUrl: z.string().url(),
    highlights: z.array(z.string()),
  }),
});

const mentoria = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    format: z.string(),
    price: z.string(),
    applicationUrl: z.string().url(),
  }),
});

const materiais = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    fileName: z.string(),
    ctaLabel: z.string().default('Baixar Material Gratuito'),
  }),
});

export const collections = { blog, cursos, mentoria, materiais };
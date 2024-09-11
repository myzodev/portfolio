import { defineCollection, z } from 'astro:content';

const work = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        slugify: z.string(),
        role: z.string(),
        url: z.string(),
        wip: z.boolean(),
        backgroundColor: z.string(),
    }),
});

const links = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        iconName: z.string(),
        url: z.string(),
    }),
});

export const collections = {
    work,
    links,
};

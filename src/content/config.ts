import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        slug: z.string(),
        role: z.string(),
        url: z.string(),
        backgroundColor: z.string(),
    }),
});

export const collections = {
    work: workCollection,
};

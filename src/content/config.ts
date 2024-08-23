import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        imageName: z.string(),
        role: z.string(),
        url: z.string(),
        backgroundColor: z.string(),
    }),
});

export const collections = {
    work: workCollection,
};

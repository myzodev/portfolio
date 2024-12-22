import { defineCollection, z } from 'astro:content';

const work = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        slugify: z.string(),
        role: z.string(),
        url: z.string(),
        year: z.number(),
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

const skills = defineCollection({
    type: 'content',
    schema: z.object({
        heading: z.string(),
        text: z.string(),
    }),
});

const experience = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        icon: z.string(),
        role: z.string(),
        year: z.string(),
        priority: z.number(),
    }),
});

export const collections = {
    work,
    links,
    skills,
    experience,
};

import { z, defineCollection, reference } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({ /* ... */ })
});

const events = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        talks: z.array(reference('talks')),
        startDateTime: z.date(),
        endDateTime: z.date(),
        sponsors: z.array(z.object({
            kindOfSupport: z.string(), 
            company: reference('companies')
        })),
        address: z.string(),
        city: z.string(),
        seats: z.number(),
        meetupUrl: z.string().url().default('https://meetup.com/FrankenJS')
    })
});

const companies = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        name: z.string(),
        logo: image(),
        website: z.string().url(),
    })
});

const speakers = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        company: z.string().optional(),
        biography: z.string().optional(),
        website: z.string().url().optional(),
        xUrl: z.string().url().optional(),
        linkedInUrl: z.string().url().optional(),
        gitHubUrl: z.string().url().optional()
    })
});

const talks = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        abstract: z.string(),
        speakers: z.array(reference('speakers'))
    })
});

const organizers = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        firstName: z.string(),
        lastName: z.string(),
        xUsername: z.string(),
        alumni: z.boolean(),
        since: z.number().min(2014),
        photo: image(),
    })
})

export const collections = {
    'blog': blogCollection,
    'events': events,
    'talks': talks,
    'companies': companies,
    'speakers': speakers,
    'organizers': organizers,
};
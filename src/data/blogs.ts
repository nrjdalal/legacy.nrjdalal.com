export interface Blog {
    id: string;
    title: string;
    url: string;
    date: string;
    claps: number;
    tags: string[];
}

export const blogs: Blog[] = [
    {
        id: 'mastering-javascript',
        title: 'Mastering JavaScript',
        url: 'https://nrjdalal.com/blog/javascript',
        date: 'Apr 2024',
        claps: 0,
        tags: ['Web Development', 'JavaScript', 'Resources'],
    },
    {
        id: 'learn-web-development',
        title: 'Learn Web Development',
        url: 'https://nrjdalal.com/blog/web-development',
        date: 'May 2024',
        claps: 0,
        tags: ['Web Development', 'Career', 'Resources'],
    },
    {
        id: 'nextjs-like-senior-dev',
        title: 'Setting Up Next.js like a Senior Developer',
        url: 'https://nrjdalal.com/blog/nextjs-pro',
        date: 'Jan 2025',
        claps: 0,
        tags: ['Next.js', 'TypeScript', 'Tooling'],
    },
    {
        id: 'npm-with-bun',
        title: 'Improving npm with Bun: A Better npm Experience',
        url: 'https://nrjdalal.com/blog/npm-with-bun',
        date: 'Jan 2025',
        claps: 0,
        tags: ['Bun', 'npm', 'Package Management'],
    },
];

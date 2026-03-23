export interface Book {
    title: string;
    author: string;
    cover: string;
    genre: string;
    goodreadsUrl: string;
}

export const booksRead: Book[] = [
    {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        cover: '/images/books/ddia.jpg',
        genre: 'tech',
        goodreadsUrl: 'https://www.goodreads.com/book/show/3735293-clean-code',
    },
    {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt, David Thomas',
        cover: '/images/books/metamorphosis.jpg',
        genre: 'tech',
        goodreadsUrl: 'https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer',
    },
];

export const currentlyReading: Book[] = [
    {
        title: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        cover: '/images/books/ddia.jpg',
        genre: 'tech',
        goodreadsUrl: 'https://www.goodreads.com/book/show/23463279-designing-data-intensive-applications',
    },
    {
        title: 'System Design Interview',
        author: 'Alex Xu',
        cover: '/images/books/white-nights.jpg',
        genre: 'tech',
        goodreadsUrl: 'https://www.goodreads.com/book/show/54109255-system-design-interview-an-insider-s-guide',
    },
];

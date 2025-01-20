import Hapi from '@hapi/hapi';
import * as booksController from '../controllers/BooksController.js';

const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'], // Allow CORS
            },
        },
    });

    // Route for adding a book
    server.route({
        method: 'POST',
        path: '/books',
        handler: booksController.addBook,
    });

    // Route for retrieving all books
    server.route({
        method: 'GET',
        path: '/books',
        handler: booksController.getAllBooks,
    });

    // Route for retrieving book details by ID
    server.route({
        method: 'GET',
        path: '/books/{bookId}',
        handler: booksController.getBookById,
    });

    // Route for updating book data by ID
    server.route({
        method: 'PUT',
        path: '/books/{bookId}',
        handler: booksController.updateBookById,
    });

    // Route for deleting a book by ID
    server.route({
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: booksController.deleteBookById,
    });

    await server.start();
    console.log('Server running at:', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

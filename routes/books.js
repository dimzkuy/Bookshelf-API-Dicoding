const express = require('express');
const {
    addBook,
    getAllBooks,
    getBookById,
    updateBookById,
    deleteBookById,
} = require('../controllers/BooksController'); // Mengimpor controller

const router = express.Router();

// Menghubungkan rute dengan fungsi di BooksController
router.post('/books', addBook);
router.get('/books', getAllBooks);
router.get('/books/:bookId', getBookById);
router.put('/books/:bookId', updateBookById);
router.delete('/books/:bookId', deleteBookById);

module.exports = router;

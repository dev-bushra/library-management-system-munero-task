const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');
const authenticateToken = require('../middleware/authMiddleware');

// router.get('/', authenticateToken, booksController.getBooks);
// router.post('/', authenticateToken, booksController.createBook);

router.post('/', authenticateToken, booksController.createBook);
router.get('/', authenticateToken, booksController.getAllBooks);
router.get('/top-borrowed', authenticateToken, booksController.getTopBorrowedBooks);
router.delete('/:id', authenticateToken, booksController.deleteBook);
router.put('/:id', authenticateToken, booksController.updateBook);


module.exports = router;

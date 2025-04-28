const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loansController');
const authenticateToken = require('../middleware/authMiddleware');

// Borrow a book
router.post('/:bookId/borrow', authenticateToken, loanController.borrowBook);

// Return a borrowed book
router.put('/:loanId/return', authenticateToken, loanController.returnBook);

// Get all loans
router.get('/', authenticateToken, loanController.getAllLoans);

module.exports = router;

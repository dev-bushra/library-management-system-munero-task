const pool = require("../../config/db");

// Borrow a Book
exports.borrowBook = async (req, res) => {
    const bookId = req.params.bookId;
    const userId = req.user.id; // Assuming user ID is in JWT token
    try {
        // Check if the book is available
        const bookResult = await pool.query('SELECT * FROM books WHERE id = $1', [bookId]);
        if (bookResult.rowCount === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }

        // Check if the book is already borrowed
        const loanResult = await pool.query('SELECT * FROM loans WHERE book_id = $1 AND return_date IS NULL', [bookId]);
        if (loanResult.rowCount > 0) {
            return res.status(400).json({ message: 'Book is already borrowed' });
        }

        // Borrow the book
        const borrowResult = await pool.query(
            'INSERT INTO loans (book_id, user_id, borrow_date) VALUES ($1, $2, NOW()) RETURNING *',
            [bookId, userId]
        );
        res.status(201).json(borrowResult.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Return a Book
exports.returnBook = async (req, res) => {
    const loanId = req.params.loanId;
    try {
        // Mark the loan as returned
        const result = await pool.query(
            "UPDATE loans SET return_date = NOW(), status = 'returned' WHERE id = $1 RETURNING *",
            [loanId]
        );
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all Loans
exports.getAllLoans = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT l.*, b.title
            FROM loans l
            JOIN books b ON l.book_id = b.id
            ORDER BY borrow_date DESC
        `);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

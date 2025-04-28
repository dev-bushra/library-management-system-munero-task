const db = require("../../config/db");

// Create a Book
exports.createBook = async (req, res) => {
  const { title, author, genre, published_date } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO Books (title, author, genre, published_date) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, author, genre, published_date]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get All Books
exports.getAllBooks = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM Books ORDER BY created_at DESC"
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Book
exports.deleteBook = async (req, res) => {
    const bookId = req.params.id;
    console.log("Deleting book with ID:", bookId);
  
    try {
      const result = await db.query(
        `DELETE FROM books WHERE id = $1 RETURNING *`,
        [bookId]
      );
  
      if (result.rowCount === 0) {
        return res.status(404).json({ message: "Book not found" });
      }
  
      res.json({ message: "Book deleted successfully", book: result.rows[0] });
    } catch (err) {
      console.error("Error during deletion:", err);
      res.status(500).json({ message: "Server error" });
    }
  };
  

// Update Book
exports.updateBook = async (req, res) => {
  const { title, author, genre, published_date } = req.body;
  const bookId = req.params.id;
  try {
    const result = await db.query(
      "UPDATE Books SET title = $1, author = $2, genre = $3, published_date = $4 WHERE id = $5 RETURNING *",
      [title, author, genre, published_date, bookId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ message: "Failed to update book" });
  }
};

// Top 5 Most Borrowed Books in last 6 months
exports.getTopBorrowedBooks = async (req, res) => {
  try {
    const result = await db.query(`
            SELECT b.title, COUNT(l.id) AS borrow_count
            FROM Loans l
            JOIN Books b ON l.book_id = b.id
            WHERE l.borrow_date >= NOW() - INTERVAL '6 months'
            GROUP BY b.id
            ORDER BY borrow_count DESC
            LIMIT 5
        `);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

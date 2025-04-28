const pool = require("../../config/db");

exports.getTasks = async (req, res) => {
  const { userId, status, page = 1, limit = 10 } = req.query;

  const offset = (page - 1) * limit;

  try {
    const result = await pool.query(
      `SELECT * FROM tasks WHERE user_id = $1 AND ($2::text IS NULL OR status = $2) 
       ORDER BY created_at DESC LIMIT $3 OFFSET $4`,
      [userId, status || null, limit, offset]
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createTask = async (req, res) => {
  const { userId, title, description, due_date, priority } = req.body;

  if (!userId || !title || !due_date || !priority) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO tasks (user_id, title, description, due_date, priority, status) 
         VALUES ($1, $2, $3, $4, $5, 'pending') RETURNING *`,
      [userId, title, description, due_date, priority]
    );

    res.status(201).json(result.rows[0]); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.markTaskAsComplete = async (req, res) => {
  const taskId = req.params.id;

  try {
    const result = await pool.query(
      `UPDATE tasks SET status = 'completed' WHERE id = $1 RETURNING *`,
      [taskId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const result = await pool.query(
      `DELETE FROM tasks WHERE id = $1 RETURNING *`,
      [taskId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully", task: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

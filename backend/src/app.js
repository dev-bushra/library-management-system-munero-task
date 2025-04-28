const express = require("express");
const app = express();
const pool = require("../config/db");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors"); 
require("dotenv").config();

app.use(cors()); 
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
  res.send("Library Management System is live");
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("DB error");
  }
});

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
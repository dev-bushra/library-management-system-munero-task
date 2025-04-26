const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/', authenticateToken, taskController.createTask);
router.get('/', authenticateToken, taskController.getTasks);
router.put('/:id/complete', authenticateToken, taskController.markTaskAsComplete);
router.delete('/:id', authenticateToken, taskController.deleteTask);

module.exports = router;
// This component contains the server logic.

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Task = require('./models/task');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todo-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));


// Get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add a new task
app.post('/api/tasks', async (req, res) => {
  try {
    const { name, completed } = req.body;
    const newTask = new Task({ name, completed });
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a task's completion status to true (complete)
app.put('/api/tasks/:id/complete', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Task ID to complete:', id); // Debugging
    const updatedTask = await Task.findByIdAndUpdate(id, { completed: true }, { new: true });
    res.json(updatedTask);
  } catch (err) {
    console.error('Error updating task:', err); // Log the error
    res.status(500).json({ error: 'Server error' });
  }
});


// Update a task's completion status to false (incomplete)
app.put('/api/tasks/:id/incomplete', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, { completed: false }, { new: true });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


// Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

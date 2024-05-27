const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title, description, dueDate, assignedTo } = req.body;
  try {
    const task = new Task({
      title,
      description,
      dueDate,
      assignedTo,
      createdBy: req.user.id,
    });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.user.id }).populate('assignedTo', 'name email');
    res.json(tasks);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
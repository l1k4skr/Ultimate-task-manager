const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    dueDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed'],
        default: 'pending',
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
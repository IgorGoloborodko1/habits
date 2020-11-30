import mongoose from 'mongoose';

const TaskSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

export const Task = mongoose.model('Task', TaskSchema);
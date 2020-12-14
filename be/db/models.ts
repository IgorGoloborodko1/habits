import mongoose from 'mongoose';
const { Schema } = mongoose;

const TaskSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const AchievementSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const ChallengeSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  }
});

const UserSchema = new Schema({
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
export const Achievement = mongoose.model('Achievement', AchievementSchema);
export const Challenge = mongoose.model('Challenge', ChallengeSchema);
export const User = mongoose.model('User', UserSchema);

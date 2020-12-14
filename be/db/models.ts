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

const AchievementSchema = mongoose.Schema({
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

const ChallengeSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  }
});

const UserSchema = mongoose.Schema({
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

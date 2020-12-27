const app = require('express')();
const http = require('http').createServer(app);
const io = require ('socket.io')(http);

import  { tasks }  from '../json-data/tasks.json';
import  { achievements }  from '../json-data/achievements.json';
import { startNewChallenge, getCurrentTask, getAchievements, getTaskArchive, getCurrentChallenge } from './funcs';
import { Challenge, ActualTask, ActualAchievement, Task } from './models';
import { replacer, reviver } from './json-utility.js';
import { connect } from '../db/db';
import { PRODUCTION_DB_DSN } from '../db/connection';

const PORT = 4000;

app.get('/login', (req, res) => {
  const challenge: Challenge | null = getCurrentChallenge('1');
  res.send({challengeInfo: null});
})

app.get('/startChallenge', (req, res) => {
  const challenge: Challenge = startNewChallenge(tasks, achievements, 30, 5);
  res.send({challengeId : challenge.id});
})

app.get('/task/:challengeId', (req, res) => {
  const task: ActualTask = getCurrentTask(req.params.challengeId);
  res.send(task);
})

app.get('/achievements/:challengeId', (req, res) => {
  const achievements: ActualAchievement[] = getAchievements(req.params.challengeId);
  res.send(achievements);
})

app.get('/taskArchive', (req, res) => {
  const taskArchive: any = getTaskArchive();
  res.send(taskArchive);
})

connect(PRODUCTION_DB_DSN)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));
  })
  .catch((err) => console.error(err));
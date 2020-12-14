import express from 'express';

import  { tasks }  from '../json-data/tasks.json';
import  { achievements }  from '../json-data/achievements.json';
import { startNewChallenge, getCurrentTask } from './funcs';
import { Challenge, ActualTask } from './models';
import { replacer, reviver } from './json-utility.js';
import { connect } from '../db/db';
import { PRODUCTION_DB_DSN, DEVELOPMENT_DB_DSN } from '../db/connection';

const app = express();
const PORT = 9000;

app.get('/', (req, res) => {
  const challenge: Challenge = startNewChallenge(tasks, achievements, 30, 5);
  res.send(JSON.stringify(challenge, replacer));
})

// app.get('/task/:id', (req, res) => {
//   const task: ActualTask = getCurrentTask(req.params.id, achievements);
//   res.send(challenge.id);
// })

app.get('/achievements', (req, res) => {
  const challenge: Challenge = startNewChallenge(tasks, achievements, 30, 5);
  res.send(challenge.id);
})

app.get('/taskArchive', (req, res) => {
  const challenge: Challenge = startNewChallenge(tasks, achievements, 30, 5);
  res.send(challenge.id);
})

connect(PRODUCTION_DB_DSN)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));
  })
  .catch((err) => console.error(err));


import { getCurrentTask, getAchievements, getTaskArchive, startNewChallenge, calculateAchievementsStatus} from './funcs';
import { ActualTask, Challenge, ChallengeState, Status} from './models';
import { tasks } from '../json-data/tasks.json';
import { achievements } from '../json-data/achievements.json';

const defaultStatus: Status = { state: 'Pending', updated: new Date()};

const actualTaskMock1: ActualTask = {
  id: '1',
  description: "Get rid of trash",
  status: defaultStatus
};

const actualTaskMock2 = {
  id: '2',
  description: "Do some stuff",
};

const actualAchievementMock = {
  id: '1',
  description: "Do everithing",
  image: "there is gonna be a picture here",
};

const challengesMock: Challenge[] = [{
  id: '1',
  state: 'In Progress',
  startDate: new Date(2020, 10, 9),
  tasksOrder: [actualTaskMock1.id, actualTaskMock2.id],
  tasksStatus: new Map([
    ["1", defaultStatus],
    ["2", defaultStatus],
  ]),
  achievementStatus: new Map([
    ["1", defaultStatus],
    ["2", defaultStatus],
  ]),
}];


describe(`${getCurrentTask} test suit`, () => {
  test(`${getCurrentTask} should return actual task from challenge`, () => {
    expect(getCurrentTask('1', challengesMock)).toEqual(actualTaskMock1);
  });
});

// describe(`${getAchievements} test suit`, () => {
//   test(`${getAchievements} should return achievement from challenge`, () => {
//     expect(getAchievements(1, challengesMock)).toEqual([actualAchievementMock]);
//   });

// });

// describe(`${getTaskArchive} test suit`, () => {
//   test(`${getTaskArchive} should return past tasks`, () => {
//     expect(getTaskArchive(1, challengesMock)).toEqual([actualTaskMock2]);
//   });
// });

// describe(`${startNewChallenge} test suit`, () => {
//   test(`${startNewChallenge} should return challenge with provided params`, () => {
//     expect(startNewChallenge([actualTaskMock1, actualTaskMock2], [actualAchievementMock], [challengesMock], 6)).toEqual({
//         id : 1,
//         state: 'InProgress',
//         startDate: new Date(),
//         tasksOrder: [actualTaskMock1, actualTaskMock2],
//         actualAchievements: [actualAchievementMock],
//         duration: 30,
//     });
//   });

// });

// describe(`${calculateAchievementsStatus} test suit`, () => {
//   test(`${calculateAchievementsStatus} should exist`, () => {
//     expect(calculateAchievementsStatus).toEqual();
//   });
// });
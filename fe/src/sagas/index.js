import { call, put, takeEvery, all, select } from 'redux-saga/effects';

const api = (url) => fetch(url).then((res) => res.json());
const apiWithDelay = (url, delay) => {
  return fetch(url).then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(result.json()), delay);
    });
  });
}
const getCurrentChallengeId = (state) => state.challengeId;

function* checkChallengeStatus() {
  try {
    const res = yield call(apiWithDelay, '/login', 3000);
    const redirect = (res.challengeInfo === null) ? true : false;
    yield put({ type: 'CHALLENGE_STATUS', redirect });
  } catch(e) {
    console.error(e);
    yield put({ type: 'CHALLENGE_EXISTS_API_ERROR' });
  }  
}

function* startChallengeSaga() {
  try {
    const res = yield call(api, '/startChallenge');
    const { challengeId  } = res;
    yield put({ type: 'START_CHALLENGE_SUCCESS', challengeId});
  } catch(e) {
    console.error(e);
    yield put({ type: 'START_CHALLENGE_FAIL', error: e.text });
  }  
}

function* getCurrentTask() {
  try {
    const id = yield select(getCurrentChallengeId);
    const res = yield call(api, `/task/${id}`);
    yield put({ type: 'CURRENT_TASK', task: res});
  } catch(e) {
    console.error(e);
    yield put({ type: 'GET_TASK_FAIL', error: e.name });
  }  
}

function* getAchievements() {
  try {
    const id = yield select(getCurrentChallengeId);
    const res = yield call(api, `/achievements/${id}`);
    yield put({ type: 'ACHIEVEMENTS', achievements: res});
  } catch(e) {
    console.error(e);
    yield put({ type: 'GET_ACHIEVEMENTS_FAIL', error: e.name });
  }  
}

function* getTaskArchive() {
  try {
    const res = yield call(api, `/taskArchive`);
    yield put({ type: 'ARCHIVE', archive: res});
  } catch(e) {
    console.error(e);
    yield put({ type: 'GET_ARCHIVE_FAIL', error: e.name });
  }  
}

function* watchCheckChallengeStatus() {
  yield takeEvery('CHECK_CHALLENGE_STATUS', checkChallengeStatus);
}

function* watchStartChallengeSaga() {
  yield takeEvery('START_CHALLENGE', startChallengeSaga);
}

function* watchGetTask() {
  yield takeEvery('GET_CURRENT_TASK', getCurrentTask);
}

function* watchGetAchievements() {
  yield takeEvery('GET_ACHIEVEMENTS', getAchievements);
}

function* watchGetTaskArchive() {
  yield takeEvery('GET_TASK_ARCHIVE', getTaskArchive);
}

export default function* rootSaga() {
  yield all([
    watchCheckChallengeStatus(),
    watchStartChallengeSaga(),
    watchGetTask(),
    watchGetAchievements(),
    watchGetTaskArchive(),
  ])
}
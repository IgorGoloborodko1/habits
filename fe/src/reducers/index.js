const inialState = {
  challenges: [],
  challengeExists: false,
};

const reducer = (state = inialState, action) => {
  switch (action.type) {
    case 'CHALLENGE_STATUS':
      return {...state, redirect: action.redirect}
    case 'CURRENT_TASK':
      return {...state, task: action.task}
    case 'ACHIEVEMENTS':
     return {...state, achievements: action.achievements}
    case 'ARCHIVE':
    return {...state, archive: action.archive}
    case 'START_CHALLENGE_SUCCESS':
      return {...state, challengeId: action.challengeId}
    default:
      return state;
  }
}

export default reducer;
const inialState = {
  challenges: []
};

const reducer = (state = inialState, action) => {
  switch (action.type) {
    case 'CHALLENGE_EXISTS':
      return {...state, challengeExists: true}
    default:
      return state;
  }
}

export default reducer;
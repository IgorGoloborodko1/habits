import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const NewChallenge = ({ challengeId, startChallenge }) => {
  return (
    <>
      { challengeId && <Redirect to='/activeChallenge'></Redirect> }
      <button onClick={startChallenge}>Start new challenge</button>
    </>
  );
}

const mapStateToProps = (state) => {
  const { challengeId } = state;
  return {
    challengeId
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    startChallenge: () => dispatch({ type: 'START_CHALLENGE' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewChallenge);
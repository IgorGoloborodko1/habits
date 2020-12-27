import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const ActiveChallenge = ({ getCurrentTask, getAchievements, currentTask, achievements }) => {
  useEffect(() => {
    getCurrentTask();
    getAchievements();
  }, []);

  const vibration = () => {
    navigator.vibrate(1000);
  }

  return (
    <>
      <h1>This is ActiveChallenge page!</h1>
      { currentTask && <h5>Current task is {currentTask.description}</h5> }
      { achievements &&
        (<>
         <p>Achievements:</p>
         <ul>{achievements.map((a, i) => <li key={i}>{a.description}</li>)}</ul>
         <button onClick={vibration}>Complete current task</button><br/><br/>
         </>)}
      <NavLink to='/taskArchive'>Tasks Archive</NavLink>
    </>
  );
}


const mapStateToProps = (state) => {
  const { task, achievements } = state;
  return {
    currentTask : task,
    achievements
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentTask: () => dispatch({ type: 'GET_CURRENT_TASK' }),
    getAchievements: () => dispatch({ type: 'GET_ACHIEVEMENTS' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveChallenge);
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const TaskArchive = ({ getTaskArchive, taskArchive}) => {
  useEffect(() => {
    getTaskArchive();
  }, [getTaskArchive]);

  return (
    <>
      <h1>This is TaskArchive page!</h1>
      { taskArchive &&
        (<>
         <p>Task Archive:</p>
         <ul>{taskArchive.map((a, i) => <li key={i}>{a.description} - {a.status}</li>)}</ul>
         </>) }
      <NavLink to='/activeChallenge'>Back to Active Challenge</NavLink>
    </>
  );
}


const mapStateToProps = (state) => {
  const { archive } = state;
  return {
    taskArchive : archive
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTaskArchive: () => dispatch({ type: 'GET_TASK_ARCHIVE' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskArchive);
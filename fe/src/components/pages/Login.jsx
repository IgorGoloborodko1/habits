import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Login = ({ checkStatus, redirect = false }) => {
  useEffect(() => {
    checkStatus();
  }, []);

  const agent = navigator.userAgent;
  let os;
if (agent.indexOf("Windows") > -1) {
     os = "Windows";
} else if (agent.indexOf("Mac OS") > -1) {
     os = "Mac OS";
} else if (agent.indexOf("Linux") > -1) {
     os = "Linux";
} else {
    os = "Unknown OS";
}

  return (
      <>
          <p>U're using {os} my friend. Good choice</p>
          { redirect && <Redirect to='/newChallenge'></Redirect> }
          <h1>Hey there!</h1>
          <p>Wait for a moment. We are checking if you have any active challenge...</p>
      </>
    );
}

const mapStateToProps = (state) => {
  const { redirect } = state;
  return {
    redirect
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkStatus: () => dispatch({ type: 'CHECK_CHALLENGE_STATUS' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
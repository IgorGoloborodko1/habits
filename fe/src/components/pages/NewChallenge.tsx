import React, { useEffect } from 'react';

const NewChallenge = () => {
  useEffect(() => {
    const callApi = async () => {
      const res = await fetch('/newChallenge');
      const data = await res.json();
    }
    callApi();
  });
  return (
    <button>Start new challenge</button>
  );
}

export default NewChallenge;
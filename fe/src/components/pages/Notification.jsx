import React from 'react';

const Notification = () => {
  const offline = !navigator.onLine;
  return (
    <>
      { offline && (
        <p>U're offline my friend</p>
      )}
    </>
  );
}

export default Notification;
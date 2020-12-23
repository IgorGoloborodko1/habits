import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

const Login = () => {
  useEffect(() => {
    const socket = io('http://localhost:4000');
  });

  return (
    <h1>Hey Bud</h1>
  );
}

export default Login;
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // event handler for signup button
  const handleSignup = (event) => {
    // prevent page reload
    event.preventDefault();

    const userInputObj = {
      username: username,
      password: password,
    };
    // request to server
    axios
      .post('/user/signup', userInputObj)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className='signup'>
      <form className='signup_form'>
        <h1>Signup Here</h1>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='text'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup} type='submit' className='submit_btn'>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;

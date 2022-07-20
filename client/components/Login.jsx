import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLogin] = useState(false);

  // onclick function to send post request to server
  // if login is successful, do we need to add a cookie to local storage?
  // on signup, do we need to create and store a cookie for the user?
  // add axios call to check user credentials against db on click of submit
  // prevent page reload
  const handleLogin = (event) => {
    event.preventDefault();

    // boolean to see if user is found
    // let found = false;

    const loginObj = {
      username: username,
      password: password,
    };
    
    // should be a POST to endpoint to check SQL server if username exists
    axios.post(`/login`, loginObj)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    
    // conditional login/logout button 
    // console.log(isLoggedIn)
    setLogin(!isLoggedIn)
    // console.log(isLoggedIn)
    
    if (isLoggedIn) {
      document.querySelector('#nav-login').innerText = 'Logout'
    } else {
      document.querySelector('#nav-login').innerText = 'Login'
    }
  };

  return (
    <>
      <div className='login'>
        <div><h7>Log In</h7></div>
        <form className='login_form'>
          <input
            type='email'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} type='submit' className='submit_btn'>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;

import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [zipcode, setZipcode] = useState('');

  // event handler for signup button
  const handleSignup = (event) => {
    // prevent page reload
    event.preventDefault();

    const userInputObj = {
      username: username,
      password: password,
      zipcode: zipcode,
    };

    axios
      .post('/user', userInputObj)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // check if username already exists
    //let exists = true;

    // since exists is set to true, do a get request to see if username is already in database
    // if it is not in database, will got to catch error where we set exists equal to false
    // since exists = false, go into else if and post the user to the database
    // if (exists) {
    //   axios.get(`/user/${username}`)
    //     .then(res => console.log('User already exists', res))
    //     .catch(err => {
    //       exists = false;
    //       console.log(err)
    //     })
    // } else if (!exists) {
    //   axios.post('/user', userInputObj)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));
    // }
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
        <input
          type='text'
          placeholder='Zip Code'
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <button onClick={handleSignup} type='submit' className='submit_btn'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;

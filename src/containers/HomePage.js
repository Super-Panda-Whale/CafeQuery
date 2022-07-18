// moved to containers section, per definition this will be the stateful component passing props to the components - Lyam
//import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <br />
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/display'>Find a location</Link>
          </li>
          <li>
            <Link to='/add'>Add a location</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default HomePage;

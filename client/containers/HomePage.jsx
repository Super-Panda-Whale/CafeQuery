// moved to containers section, per definition this will be the stateful component passing props to the components - Lyam
import React, { useState } from 'react';
import axios from 'axios';
import WorkspaceContainer from './WorkspaceContainer.jsx';
import searchIcon from '../assets/search.png';

const HomePage = () => {
  const [zipcode, setZipcode] = useState('');
  const [workspaces, setWorkspaces] = useState('');

  const handleZipcodeSearch = () => {
    axios
      .get(`/workspace?zipcode=${zipcode}`) // should be a POST request??
      .then((res) => {
        console.log(res);
        setWorkspaces(res.data);
      })
      .catch((error) => {
        console.error(
          `Couldn\'t fetch workspaces handleZipcodeSearch in HomePage, error: ${error}`
        );
      });
  };

  return (
    <>
      <div className='searchForm'>
        <input
          type='text'
          placeholder='Search for a cafe or zipcode...'
          className='search-field'
          onChange={(e) => setZipcode(e.target.value)}
        />
        <button
          onClick={handleZipcodeSearch}
          type='submit'
          className='search-button'
        >
          <img src={searchIcon} />
        </button>
      </div>
      <div className='appDescription'>
        <p>
          Looking for a place to work or study remotely? <br></br>
          <br></br>Use CafeQuery to search for a specific cafe, restaurant, or
          bar to see reviews from other remote workers. <br></br>
          <br></br> You can also look up your zipcode to find workspaces near
          you!
        </p>
      </div>

      {/* removing this to place into workspace endpoint */}
      <WorkspaceContainer workspaces={workspaces} />
    </>
  );
};

export default HomePage;

import React, { useState } from 'react';
import Reviews from './Reviews.jsx';
import AddReview from './addReview.jsx';

const Workspace = (props) => {
  //display information received in the result body 
  //from the databse query to locations
  const { workspaceName, address, wifi, type, quiet, outlets, timeLimit, laptopRestrictions, crowded,
  outdoorSeating, petFriendly, seating, workspaceid } = props.resultObject;

  console.log(props.resultObject) 
  
  const [ isClicked, setIsClicked ] = useState(false);

  // making a fetch to workspace/id - redirect or popup to review container?
  const handleWorkspaceView = async () => {
    console.log('handleWorkspaceView Clicked');
    try {
      // workspace/:id
      const response = await fetch(`/workspace/${workspaceid}`)
      const data = await response.json();
      console.log('Data received from workspace: ', data)
    } catch (err) {
      console.log('Error viewing workspace: ', err);
    }
  }

  // where the joining of a single workspace to reviews table is happening
  // one (workspace) to many (reviews) relationship
  // implmenet error handling using try/catch block later

  // let reviewsData = null;
  // (async () => {
  //   const reviews = await fetch(`/reviews/${workspaceid}/`);
  //   reviewsData = reviews.json();
  // })(); 

  return(
    <>
      <div className="LocationDisplay">
        <h4>Name: {workspaceName}</h4> <br></br>
        <h4>Address: {address}</h4><br></br>
        <h4>Wifi: {wifi}</h4><br></br>
        <h4>Type: {type}</h4><br></br>
        <h4>Noise level: {quiet}</h4><br></br>
        <h4>Outlets: {outlets}</h4><br></br>
        <h4>Time limit: {timeLimit}</h4><br></br>
        <h4>Laptop Restrictions: {laptopRestrictions}</h4><br></br>
        <h4>Busy: {crowded}</h4><br></br>
        <h4>Outdoor Seating: {outdoorSeating}</h4><br></br>
        <h4>Pet friendly: {petFriendly}</h4><br></br>
        <h4>Seating: {seating}</h4><br></br>
        <Reviews/>
        {/* reviews={reviewsData} */}
        <button onClick={() =>  setIsClicked(!isClicked)}>Add a review</button>
        { isClicked && <AddReview workspaceid={workspaceid} /> }
        <button onClick={handleWorkspaceView}>View workspace</button>
      </div>
    </>
  );
};

export default Workspace;
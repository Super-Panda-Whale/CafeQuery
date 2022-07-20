import React from 'react';
import Reviews from './Reviews.jsx';

const Workspace = (props) => {
  //display information received in the result body 
  //from the databse query to locations
  const { workspaceName, address, rating, wifi, type, quiet, outlets, timeLimit, laptopRestrictions, crowded,
  outdoorSeating, petFriendly, foodRating, coffeeRating, seating, workspaceid } = props.resultObject;

  // making a fetch to workspace/id - redirect or popup to review container?
  const handleWorkspaceView = async () => {
    console.log('handleWorkspaceView Clicked');
    try {
      const response = await fetch(`/workspace/id/${workspaceid}`)
      const data = await response.json();
      console.log('Data received from workspace: ', data)
    } catch (err) {
      console.log('Error viewing workspace: ', err);
    }
  }
  
  // where the joining of a single workspace to reviews table is happening
  // one (workspace) to many (reviews) relationship
  // implmenet error handling using try/catch block later
  let reviewsData = null;
  (async () => {
    const reviews = await fetch(`/reviews/${workspaceid}/`);
    reviewsData = reviews.json();
  })();

  return(
    <>
      <div onClick={handleWorkspaceView} className="LocationDisplay">
        <h4>Name: {workspaceName}</h4> <br></br>
        <h4>Address: {address}</h4><br></br>
        <h4>Overall Rating: {rating}</h4><br></br>
        <h4>Wifi: {wifi}</h4><br></br>
        <h4>Type: {type}</h4><br></br>
        <h4>Noise level: {quiet}</h4><br></br>
        <h4>Outlets: {outlets}</h4><br></br>
        <h4>Time limit: {timeLimit}</h4><br></br>
        <h4>Laptop Restrictions: {laptopRestrictions}</h4><br></br>
        <h4>Busy: {crowded}</h4><br></br>
        <h4>Outdoor Seating: {outdoorSeating}</h4><br></br>
        <h4>Pet friendly: {petFriendly}</h4><br></br>
        <h4>Food rating: {foodRating}</h4><br></br>
        <h4>Coffee rating: {coffeeRating}</h4><br></br>
        <h4>Seating: {seating}</h4><br></br>
        <Reviews reviews={reviewsData}/>
      </div>
    </>
  );
};

export default Workspace;
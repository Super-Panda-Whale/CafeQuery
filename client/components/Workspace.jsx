import React, { useState } from 'react';
import Reviews from './Reviews.jsx';
import AddReview from './addReview.jsx';
import axios from 'axios';

const Workspace = (props) => {
  //display information received in the result body 
  //from the databse query to locations
  const { workspacename, address, wifi, type, quiet, outlets, timeLimit, laptopRestrictions, crowded,
  outdoorSeating, petFriendly, seating, workspaceid } = props.resultObject;
  const [reviews, setReviews] = useState([]);
  
  const [ isClicked, setIsClicked ] = useState(false);
  const [ reviewClicked, setReviewClicked ] = useState(false);

  // making a fetch to workspace/id - redirect or popup to review container?
  const handleWorkspaceView = async () => {
    console.log('handleWorkspaceView Clicked');
    try {
      // workspace/:id
      const response = await axios.get(`/workspace/${workspaceid}`)
      console.log('Data received from workspace: ', response.data)
    } catch (err) {
      console.log('Error viewing workspace: ', err);
    }
  }

  // where the joining of a single workspace to reviews table is happening
  // one (workspace) to many (reviews) relationship
  // implmenet error handling using try/catch block later

  const reviewObj = {};

  async function getReviews() {
    const response = await axios.get(`/reviews/${workspaceid}/`);
    setReviews(response.data);
    console.log(response.data)
    
    // return <Reviews reviews={reviews} />
  }; 

  // getReviews();

  console.log('reviewsData: ', reviews)

  return(
    <>
      <div className="LocationDisplay">
        <h4>Name: {workspacename}</h4> <br></br>
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
        <button  className = 'btn-33' onClick={() =>  setIsClicked(!isClicked)}><span>Add a review</span><span class="marquee" aria-hidden>Add a review</span></button>
        { isClicked && <AddReview workspaceid={workspaceid} /> }
        <button className = 'btn-33' onClick={handleWorkspaceView}><span>View</span><span class="marquee" aria-hidden>View</span></button>
        <button  className = 'btn-33' onClick={() => {
          getReviews();
          setReviewClicked(!reviewClicked);
        }}><span>Get Reviews</span> <span class="marquee" aria-hidden>Get Reviews</span></button>
        { reviewClicked && <Reviews reviews={reviews} /> } 
      </div>
    </>
  );
};

export default Workspace;
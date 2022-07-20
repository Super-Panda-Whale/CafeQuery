import React, { useState } from 'react';
import axios from 'axios';

function Review(props) {
  // console.log(props.review)
  const { username, rating, review } = props.review;
  // console.log( username, rating, review) 
  return (
    <div className = 'review'>
      <div>{username}</div>
      <div>{rating}</div>
      <div>{review}</div>
    </div>
  )
}

export default Review;

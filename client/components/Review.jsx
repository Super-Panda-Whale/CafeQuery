import React, { useState } from 'react';
import axios from 'axios';

function Review(props) {
  // console.log(props.review)
  const { username, rating, review } = props.review;
  // console.log( username, rating, review) 
  return (
    <div className = 'review'>
      <div id = 'reviewUsername'>{username}</div>
      <div id = 'reviewRating'>{rating}</div>
      <div id = 'reviewDescription'>{review}</div>
    </div>
  )
}

export default Review;

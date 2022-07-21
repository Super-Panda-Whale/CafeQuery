import React, { useState } from 'react';
import axios from 'axios';

function Review(props) {
  const { username, rating, review } = props;

  return (
    <div className='review'>
      <div className='reviewUsername'>{username}</div>
      <div className='reviewRating'>{rating}</div>
      <div className='reviewDescription'>{review}</div>
    </div>
  )
}

export default Review;

import React, { useState } from 'react';
import axios from 'axios';

function Review({ username, numberRating, reviewText }) {
  return (
    <div className = 'review'>
      <p>{username}</p>
      <p>{numberRating}</p>
      <p>{reviewText}</p>
    </div>
  )
}

export default Review;

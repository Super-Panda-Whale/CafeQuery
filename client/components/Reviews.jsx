import React from 'react';
import Review from './Review.jsx';

const Reviews = ({reviews}) => {
  const reviewArr = [];
  for (let i = 0; i < 5; i++) {
    reviewArr.push(<p>test review</p>)
    // <Review review = {reviews[i]}
  }
  
  return (
    <div classname = 'reviews'>
      {reviewArr}
    </div>
  )
}

export default Reviews;

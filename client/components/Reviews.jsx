import React from 'react';
import Review from './Review.jsx';

const Reviews = ({reviews}) => {
  const reviewArr = [];
  for (let i = 0; i < reviews.length; i++) {
    reviewArr.push(<Review review = {reviews[i]} key = {i} />)
  }
  
  return (
    <div classname = 'reviews'>
      {reviewArr}
    </div>
  )
}

export default Reviews;
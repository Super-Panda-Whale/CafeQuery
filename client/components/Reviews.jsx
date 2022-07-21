import React from 'react';
import Review from './Review.jsx';

const Reviews = ({reviews}) => {
 const reviewArr = [];
  for (let i = 0; i < reviews.length; i++) {
    reviewArr.push(<Review username={reviews[i].username} rating={reviews[i].rating} review={reviews[i].review}/>)
  } 
  
  return (
    <div className='reviews'>
      {reviewArr}
    </div>
  )
}

export default Reviews;

import axios from 'axios';
import React, { useState } from 'react';

function AddReview({workspaceid}) {

  const [username, setUsername] = useState('');
  const [numberRating, setNumberRating] = useState('');
  const [reviewText, setReviewText] = useState('');

  // function to handle button click for add Space
  const handleAddReview = (event) => {
    // we want to pass all of the input values to an object to pass to the db
    event.preventDefault();

    const inputObj = {
      'username': username,
      'numberRating': numberRating,
      'reviewText': reviewText,
    };

    // TODO: edge cases to check if required fields aren't entered
    if (username === '') {
      alert('Please enter a valid name.');
    }

    // send POST request to server with new workspace info in body
    axios.post(`/reviews/${workspaceid}`, inputObj)
      .then(res => {
        // panda whale - need something to respond so we know it successfully posted
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className='review'>
      <form onSubmit={handleAddReview}>
        <input onChange={(e) => {setUsername(e.target.value)}} placeholder='username' value = {username} />
        <input onChange={(e) => {setNumberRating(e.target.value)}} placeholder='number rating' value = {numberRating} />
        <input onChange={(e) => {setReviewText(e.target.value)}} placeholder='review text' value = {reviewText} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddReview;

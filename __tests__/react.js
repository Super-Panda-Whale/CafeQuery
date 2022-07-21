import React from 'React';
import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

import Review from '../client/components/Review';
import AddReview from '../client/components/addReview';

describe('Unit testing React components', () => {
  
  describe('Review Component', () =>{
    let review;
    const props = {
      username: 'best reviewer na',
      rating: 5,
      review: 'This good mane'
    };
    
    beforeAll(() => {
      review = render(<Review {...props} />)
    });

    test('Renders the passed down props', () => {
      expect(review.getByText('best reviewer na')).toBeTruthy();
      expect(review.getByText(5)).toBeTruthy();
      expect(review.getByText('This good mane')).toBeTruthy();
    });
    
  });

  describe('addReview Component', () =>{
    let reviews;
    const props = {
      workspaceid: 1
    };
    
    beforeAll(() =>{
      reviews = render(<AddReview {...props}/>)
    });

    test('It should contain a button for adding a review', async () => {
      const buttons = await screen.findAllByRole('button');
      expect(buttons.length).toBe(1);
      expect(buttons[0]).toHaveTextContent('Submit');
    });
  });
  
});
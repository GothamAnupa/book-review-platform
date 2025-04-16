import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookDetail({ match }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`/api/books/${match.params.id}`)
      .then(response => setBook(response.data))
      .catch(err => console.error(err));
  }, [match.params.id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <h2>Reviews:</h2>
      {book.reviews.map(review => (
        <div key={review._id}>
          <p>{review.content}</p>
          <p>- {review.user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetail;

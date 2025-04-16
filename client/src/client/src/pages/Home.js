import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/books')
      .then(response => setBooks(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Featured Books</h1>
      <div>
        {books.map(book => (
          <div key={book._id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <a href={`/books/${book._id}`}>View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

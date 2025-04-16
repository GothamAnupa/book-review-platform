import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile({ match }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`/api/users/${match.params.id}`)
      .then(response => setUser(response.data))
      .catch(err => console.error(err));
  }, [match.params.id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
      <p>Reviews Written: {user.reviews.length}</p>
    </div>
  );
}

export default Profile;

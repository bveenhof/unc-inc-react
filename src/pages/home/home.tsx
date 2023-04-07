import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h2>Homepage</h2>
      <p>
        This is the homepage!
      </p>
      <p>
        <Link to="/dashboard">To the dasboard</Link>
      </p>
    </section>
  );
}

export default Home;

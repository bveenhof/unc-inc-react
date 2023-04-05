import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/home">Home</Link>
      <Link to="/dashboard">Dasboard</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Navigation;

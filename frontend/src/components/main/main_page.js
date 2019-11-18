import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/main.css';

const MainPage = () => (
  <div className="main-container">
    <div className="main-page">
      <h1>not real twitter</h1>
      <div className="main-links">
        <Link to="/signup">sign up</Link>
        <Link to="/login">log in</Link>
      </div>
      <footer>
        <p>copyright &copy; 2019 nk</p>
      </footer>
    </div>
  </div>
);

export default MainPage;
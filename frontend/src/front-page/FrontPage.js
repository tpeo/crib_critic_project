import React from 'react';
import SearchBar from '../components/SearchBar';
import logo from '../images/CribCritiq.png';
import './frontpage.css';

function FrontPage(props) {
    return (
      <>
        <div className="searchbar-container">
          <img src={logo} alt="Logo"/>
          <SearchBar />
        </div>
      </>
    );
}

export default FrontPage;
import React from 'react'
import './LandingPage.css';
import SearchBar from './SearchBar';
import LogoName from '../images/CribCritiqName.svg';

export default function SearchContainer() {
  return (
    <div className="search-container">
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src = {LogoName} alt= 'Crib Critiq Name' style = {{height: '75%', width: '75%'}}></img>
      </div>
      <div style = {{display: 'flex', justifyContent: 'center', marginTop: '3%'}}>
        <SearchBar />
      </div>
      <div></div>
    </div>
  );
}

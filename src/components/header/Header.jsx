import React from 'react';
import Navbar from '../navbar/Navbar';
import arrowImg from '../../images/icon-arrow-down.svg';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
        <Navbar />
        <div className='header-text'>
          <h1>WE ARE CREATIVES</h1>
          <img class="arrow" src={arrowImg} alt="arrow" />
        </div>
        
    </div>
  )
}

export default Header
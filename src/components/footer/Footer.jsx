import React from 'react';
import facebook from '../../images/icon-facebook.svg';
import instagram from '../../images/icon-instagram.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <h1>sunnyside</h1>
      <div className='footer-menu'>
        <ul>
          <li><a href='#about'>About</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#projects'>Projects</a></li>
        </ul>
      </div>
      <div className='footer-icons'>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={pinterest} alt="pinteres" />
      </div>
      <p className='copyright'>Coded by Shabrina Putri.</p>
    </div>
  )
}

export default Footer

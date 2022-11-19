import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../images/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='navbar section_padding'>
    <div className='navbar-logo'>
      <img src={logo} alt='app logo' /> 
    </div>
    <ul className='navbar-links'>
      <li><a href='#about'>About</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#projects'>Projects</a></li>
      <li><button type='button'>CONTACT</button></li>
    </ul>

    <div className='navbar-smallscreen'>
      <RiMenu3Line style={{'cursor': 'pointer'}} color='white' fontSize={27} onClick={() => setToggleMenu(true)} />
      {toggleMenu && (
        <div className='navbar-smallscreen_overlay flex__center slide-bottom'>
        <RiCloseLine  color='black' fontSize={27} className='close_icon' onClick={() => setToggleMenu(false)} />
        <ul className='navbar-smallscreen_links'>
          <li><a href='#about'>About</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><button type='button'>CONTACT</button></li>
        </ul>
      </div>
      )}
    </div>
  </nav>
  );
}

export default Navbar
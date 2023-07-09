import React from 'react';
import './header.css';

function Header() {
  return (
 <>
    <nav className="Header">
    <div className="Logo">WeatherApp</div>
       <ul>
        <li><a href="default.asp">Weather</a></li>
          <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About Us</a></li>

      </ul>
    </nav>


    </>
  );
}
export default Header;

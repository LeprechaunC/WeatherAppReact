import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
      <div className="container text-center">
        <small>&copy; {new Date().getFullYear()}WeatherApp</small>
      </div>
    </footer>
  );
}

export default Footer;

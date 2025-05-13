 import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container bg-gray-100 py-8 text-center">
      <h2 className="footer-title text-2xl font-bold mb-2">Library</h2>
      <p className="footer-description text-gray-700 mb-4 px-4">
        Library is an eBook service born of Open Access, making academic libraries free and open to all.
      </p>
      <div className="social-icons flex justify-center gap-4 mb-4">
        <a href="#" className="social-icon text-blue-600 text-2xl">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon text-blue-400 text-2xl">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon text-blue-800 text-2xl">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" className="social-icon text-pink-500 text-2xl">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="social-icon text-red-600 text-2xl">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <p className="copyright-text text-gray-500 text-sm">
        Copyright © All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
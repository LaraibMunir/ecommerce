import React from 'react';
import './Footer.css';  // Assuming you have some styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} ScarfBrand. All rights reserved.</p>
        <div className="social-media-links">
          {/* Icons and links to social media profiles */}
          <a href="https://www.facebook.com/scarfbrand" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/scarfbrand" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.twitter.com/scarfbrand" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Assuming you have some styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">ScarfBrand</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/customerService">Customer Service</Link>
        <Link to="/account">Account</Link>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="navbar">
        {/*
        <div className="navbar-content">
          <a href="/" className="navbar-brand">My Blog</a>
          <div className="navbar-links">
            <a href="/" className="nav-link">Home</a>
            <a href="/blog" className="nav-link">Blog</a>
            <a href="/about" className="nav-link">About</a>
          </div>
        </div>
        */}
      </nav>
    );
  }

export default Navbar;
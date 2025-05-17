// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4 mt-4">
      <p>© 2025 Usha Fitness. All Rights Reserved.</p>
      
      {/* Links to About, Contact, Privacy */}
      <div className="mb-3">
        <Link className="text-white mx-3" to="/about">About</Link>
        <Link className="text-white mx-3" to="/contact">Contact Us</Link>
        <Link className="text-white mx-3" to="/privacy">Privacy</Link>
      </div>

      {/* Social Media Icons */}
      <div>
        <a href="https://facebook.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="https://twitter.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="https://instagram.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://linkedin.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}

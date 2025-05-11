// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4 mt-4">
      <p>© 2025 Usha Fitness. All Rights Reserved.</p>
      
      {/* Links to About, Contact, Privacy */}
      <div className="mb-3">
        <a href="/" className="text-white mx-3">About</a>
        <a href="/contact" className="text-white mx-3">Contact Us</a>
        <a href="/" className="text-white mx-3">Privacy</a>
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

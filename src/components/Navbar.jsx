// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa'; // Import fitness icon

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black">
      {/* Use Link here instead of <a> */}
      <Link className="navbar-brand text-white d-flex align-items-center" to="/">
        <FaDumbbell size={30} className="mr-2" style={{margin:'5px'}}/> 
         <strong>Usha Fitness</strong>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto"> {/* Align links to the right */}
          <li className="nav-item active">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/diet">Diet</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/exercise">Exercise</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/membership">Membership</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

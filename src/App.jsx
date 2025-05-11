import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import DietChart from './pages/DietChart';
import ExercisePlan from './pages/ExercisePlan';
import Membership from './pages/Membership';
import ContactUs from './pages/ContactUs';  // Import ContactUs Component
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-vh-100 bg-light"> {/* Off-white background & full height */}
      <BrowserRouter>
        <Navbar />
        
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/diet" element={<DietChart />} />
            <Route path="/exercise" element={<ExercisePlan />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<ContactUs />} />  {/* New route for ContactUs */}
          </Routes>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

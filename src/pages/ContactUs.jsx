import React, { useState, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ContactUs() {
  const [showModal, setShowModal] = useState(false);

  // Create refs to store form input values
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submit
    setShowModal(true); // Show the modal after form submission

    // Clear the form fields by resetting the refs
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h1 className="text-center mb-4">Contact Us</h1>
          <p className="text-center text-muted mb-4">
            We would love to hear from you! If you have any questions or need assistance, feel free to contact us.
          </p>

          {/* Gym Contact Details */}
          <div className="mb-4">
            <h4>Contact Information</h4>
            <ul className="list-unstyled">
              <li><strong>Phone:</strong> +1 (123) 456-7890</li>
              <li><strong>Email:</strong> <a href="mailto:info@gym.com">info@gym.com</a></li>
              <li><strong>Address:</strong> 123 Fitness St, Workout City, WC 56789</li>
            </ul>
          </div>

          <hr />

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                ref={nameRef}
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                ref={emailRef}
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                className="form-control"
                rows="4"
                placeholder="Your message here..."
                ref={messageRef}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal Popup */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Our team will contact you soon. We appreciate your message!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

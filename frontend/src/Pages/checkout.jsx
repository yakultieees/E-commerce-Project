import React, { useState } from 'react';
import './CSS/Checkout.css'; // Correct path for Checkout.css
import Modal from '../Components/Modal/Modal'; // Correct path for Modal.js

const Checkout = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setShowModal(true); // Show the modal after payment is submitted
    setTimeout(() => {
      window.location.href = '/'; // Redirect to home page after a few seconds
    }, 3000); // Redirect after 3 seconds
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-form">
        <h2>Payment Details</h2>
        <form onSubmit={handlePayment}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="address">Shipping Address</label>
            <input type="text" id="address" name="address" required />
          </div>

          <div className="form-group">
            <label htmlFor="card">Credit Card Number</label>
            <input type="text" id="card" name="card" required />
          </div>

          <div className="form-group">
            <label htmlFor="expiration">Expiration Date</label>
            <input type="text" id="expiration" name="expiration" required />
          </div>

          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" required />
          </div>

          <button type="submit">Proceed with Payment</button>
        </form>
      </div>

      {showModal && (
        <Modal message="Your order is being processed..." onClose={closeModal} />
      )}
    </div>
  );
};

export default Checkout;

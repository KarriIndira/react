import React from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = ({ cart = [] }) => {
  const navigate = useNavigate();

  // Ensure cart is an array and calculate the total price
  const totalPrice = cart.length > 0 ? cart.reduce((acc, item) => acc + item.price, 0) : 0;

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment Page</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add some items first!</p>
      ) : (
        <>
          <h3>Total Amount: ₹{totalPrice}</h3>
          <button className="pay-btn" onClick={() => alert("Payment Successful!")}>
            Pay Now
          </button>
        </>
      )}
      <button className="back-btn" onClick={() => navigate("/cart")}>
        Back to Cart
      </button>
    </div>
  );
};

export default PaymentPage;


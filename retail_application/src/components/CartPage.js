import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = ({ cart = [], setCart }) => {
  const navigate = useNavigate();

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate total price (fixes the "reduce" error)
  const totalPrice = cart.length > 0 ? cart.reduce((acc, item) => acc + item.price, 0) : 0;

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.name} - ₹{item.price}</span>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{totalPrice}</h3>
          <button className="checkout-btn" onClick={() => navigate("/payment")}>
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;

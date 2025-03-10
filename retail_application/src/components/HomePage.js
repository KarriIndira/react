import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const products = [
  { id: 1, name: "Laptop", price: 50000, image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?fm=jpg&q=60&w=3000" },
  { id: 2, name: "Smartphone", price: 20000, image: "https://i.ytimg.com/vi/JkRXhe3KaPE/maxresdefault.jpg" },
  { id: 3, name: "Headphones", price: 3000, image: "https://img.tatacliq.com/images/i10/437Wx649H/MP000000017346206_437Wx649H_202304251122121.jpeg" },
  { id: 4, name: "Smartwatch", price: 7000, image: "https://istarmax.com/wp-content/uploads/2024/04/Starmax-Product-Range-Summer-2024-2.png" },
];

const HomePage = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="home-container">
      <h2 className="home-title">Product Catalog</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            <button className="buy-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;




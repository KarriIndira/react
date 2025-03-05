import React, { useState } from "react";

const groceries = [
  { id: 1, name: "Apple", price: 30 },
  { id: 2, name: "Banana", price: 10 },
  { id: 3, name: "Carrot", price: 20 },
  { id: 4, name: "Milk", price: 50 },
];

const App = () => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  const removeFromBasket = (index) => {
    const newBasket = [...basket];
    newBasket.splice(index, 1);
    setBasket(newBasket);
  };

  const totalAmount = basket.reduce((total, item) => total + item.price, 0);

  return (
    <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <h1 style={{ color: "#343a40" }}>Grocery Store</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {groceries.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", backgroundColor: "white", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)", width: "150px" }}>
            <h3 style={{ color: "#007bff" }}>{item.name}</h3>
            <p style={{ color: "#28a745" }}>Price: ₹{item.price}</p>
            <button style={{ backgroundColor: "#007bff", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", borderRadius: "3px" }} onClick={() => addToBasket(item)}>Add to Basket</button>
          </div>
        ))}
      </div>
      <h2 style={{ color: "#343a40", marginTop: "20px" }}>Basket:</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {basket.map((item, index) => (
          <li key={index} style={{ backgroundColor: "white", padding: "10px", margin: "5px", borderRadius: "5px", boxShadow: "1px 1px 5px rgba(0,0,0,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {item.name} - ₹{item.price}
            <button style={{ backgroundColor: "#dc3545", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", borderRadius: "3px" }} onClick={() => removeFromBasket(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3 style={{ color: "#343a40" }}>Total Amount: ₹{totalAmount}</h3>
    </div>
  );
};

export default App;
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create a MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL Database ✅");
});

// Register User
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(sql, [username, email, password], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User Registered Successfully" });
  });
});

// Fetch Products
app.get("/products", (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// Place Order
app.post("/order", (req, res) => {
  const { user_id, cart } = req.body;
  let total_price = cart.reduce((acc, item) => acc + item.price, 0);

  // Insert into orders table
  const orderSql = "INSERT INTO orders (user_id, total_price) VALUES (?, ?)";
  db.query(orderSql, [user_id, total_price], (err, result) => {
    if (err) return res.status(500).json(err);
    const order_id = result.insertId;

    // Insert each cart item into order_items table
    cart.forEach((item) => {
      const itemSql = "INSERT INTO order_items (order_id, product_id, quantity) VALUES (?, ?, ?)";
      db.query(itemSql, [order_id, item.id, 1], (err, result) => {
        if (err) console.error("Order Item Error:", err);
      });
    });

    res.json({ message: "Order Placed Successfully!", order_id });
  });
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000 🚀"));

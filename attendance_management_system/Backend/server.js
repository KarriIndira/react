const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const JWT_SECRET = "myTemporarySecretKey"; 
const { sequelize } = require("./config/db");
require("dotenv").config();
console.log("Sequelize Instance:", sequelize);


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/attendance", attendanceRoutes);

// Database Connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
    return sequelize.sync();
  })
  .then(() => {
    console.log("Models synchronized...");
  })
  .catch((err) => console.log("Error connecting to database:", err));

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

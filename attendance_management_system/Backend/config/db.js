const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // Set to true to see SQL queries in the console
});

sequelize.authenticate()
    .then(() => console.log("✅ Database connected successfully!"))
    .catch(err => console.error("❌ Database connection error:", err));

module.exports = {sequelize};

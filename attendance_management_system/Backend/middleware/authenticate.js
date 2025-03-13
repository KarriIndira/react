const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Ensure the path is correct

const authenticate = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ message: "No token, authorization denied" });
        }

        const decoded = jwt.verify(token, "your_secret_key"); // Change this to your actual secret key
        req.user = await User.findByPk(decoded.id);

        if (!req.user) {
            return res.status(401).json({ message: "User not found" });
        }

        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = authenticate;

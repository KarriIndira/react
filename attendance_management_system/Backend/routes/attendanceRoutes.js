const express = require("express");
const Attendance = require("../models/Attendance");
const authenticate = require("../middleware/authenticate");
const router = express.Router();

// Mark Attendance
router.post("/mark", authenticate, async (req, res) => {
    try {
        const { date, status } = req.body;
        const userId = req.user.userId;

        const existingRecord = await Attendance.findOne({ userId, date });
        if (existingRecord) return res.status(400).json({ message: "Attendance already marked for this date" });

        const attendance = new Attendance({ userId, date, status });
        await attendance.save();
        res.status(201).json({ message: "Attendance marked successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Get Attendance Records
router.get("/records", authenticate, async (req, res) => {
    try {
        const userId = req.user.userId;
        const records = await Attendance.find({ userId });
        res.json(records);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;

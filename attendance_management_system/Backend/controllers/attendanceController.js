const Attendance = require("../models/Attendance");

// Mark Attendance
exports.markAttendance = async (req, res) => {
    try {
        const { userId, date, status } = req.body;
        
        let attendance = await Attendance.findOne({ userId, date });
        if (attendance) {
            return res.status(400).json({ message: "Attendance already marked for this date" });
        }

        attendance = new Attendance({ userId, date, status });
        await attendance.save();

        res.status(201).json({ message: "Attendance marked successfully", attendance });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Get Attendance Records
exports.getAttendance = async (req, res) => {
    try {
        const { userId } = req.params;
        const records = await Attendance.find({ userId });
        res.json(records);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

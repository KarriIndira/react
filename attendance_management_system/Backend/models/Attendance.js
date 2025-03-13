const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/db"); // Ensure this path is correct

const Attendance = sequelize.define("Attendance", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("Present", "Absent", "Late"),
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Attendance;


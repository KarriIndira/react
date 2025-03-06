import React, { useState, useEffect } from 'react';
import './App.css';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, time]);

    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };
    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className={`stopwatch-container ${darkMode ? 'dark' : ''}`}>
            <h1 className="time-display">{time}s</h1>
            <div className="button-group">
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
                Toggle Dark Mode
            </button>
        </div>
    );
};

export default Stopwatch;



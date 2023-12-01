import React, { useState } from 'react';

const RightDetail = () => {
    const today = new Date().toISOString().split('T')[0];
    const lastYear = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString().split('T')[0];

    const [fromDate, setFromDate] = useState(lastYear);
    const [toDate, setToDate] = useState(today);

    const handleTimeRange = (range) => {
        console.log(`Time Range: ${range}, From: ${fromDate}, To: ${toDate}`);
        // Implement your logic based on the selected time range and date range
    };

    return (
        <div className="sidebar">
            {/* Removed the Detail date input and its label */}

            <label htmlFor="fromDate">From:</label>
            <input 
                type="date" 
                id="fromDate" 
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                max={toDate}
                min={lastYear}
            />

            <div className="spacing"></div> {/* Space after From Date */}

            <label htmlFor="toDate">To:</label>
            <input 
                type="date" 
                id="toDate" 
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                max={today}
                min={fromDate}
            />

            <div className="spacing"></div> {/* Space after To Date */}

            <div><button className="time-button" onClick={() => handleTimeRange("Past Hour")}>Past Hour</button></div>
            <div><button className="time-button" onClick={() => handleTimeRange("Past Day")}>Past Day</button></div>
            <div><button className="time-button" onClick={() => handleTimeRange("Past Week")}>Past Week</button></div>
            <div><button className="time-button" onClick={() => handleTimeRange("Past Month")}>Past Month</button></div>
        </div>
    );
};



export default RightDetail;
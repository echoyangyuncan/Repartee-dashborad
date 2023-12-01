import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph = () => {
    const canvasRef = useRef(null); // Ref for the canvas element
    const chartRef = useRef(null); // Ref for the chart instance

    useEffect(() => {
        // Destroy any existing chart instance
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Check if the canvas element is available and create a new chart
        if (canvasRef.current) {
            chartRef.current = new Chart(canvasRef.current.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Time1',
                        data: [12, 19, 3, 5, 2, 3],
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 1
                    }, {
                        label: 'Time2',
                        data: [7, 11, 5, 8, 3, 7],
                        borderColor: 'rgb(54, 162, 235)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // Cleanup function to destroy the chart instance when the component unmounts
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className="graph-container">
            <canvas ref={canvasRef} id="myChart"></canvas>
        </div>
    );
};

export default Graph;
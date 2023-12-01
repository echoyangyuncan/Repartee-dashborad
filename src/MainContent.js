import React from 'react';
import Graph from './Graph';
import './MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <Graph />
            {/* Other content can go here */}
        </div>
    );
}

export default MainContent;
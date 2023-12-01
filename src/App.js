import React from 'react';
import LeftDetail from './LeftDetail'; // Make sure this component exists and is exported correctly
import RightDetail from './RightDetail'; // Make sure this component exists and is exported correctly
import UserProfile from './UserProfile';
import Breadcrumbs from './Breadcrumbs';
import MainContent from './MainContent';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <header className="top-section">
                <UserProfile />
            </header>
            <div className="main-section">
                <aside className="left-panel">
                    <LeftDetail />
                </aside>
                <div className="center-content">
                    <Breadcrumbs />
                    <MainContent />
                </div>
                <aside className="right-panel">
                    <RightDetail />
                </aside>
            </div>
        </div>
    );
}

export default App;
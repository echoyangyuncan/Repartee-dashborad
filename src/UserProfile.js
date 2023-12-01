import React from 'react';
import './UserProfile.css'; // Assumed CSS file for styling

const UserProfile = () => {
    return (
        <div className="user-profile-container">
            <div className="avatar-section">
                <img src="/path-to-avatar.png" alt="User Avatar" /> {/* Placeholder path */}
                <span>Danny</span>
                {/* Additional icons or elements here */}
            </div>
            <div className="navigation-menu">
                <ul>
                    <li><a href="/admin">Admin</a></li>
                    <li><a href="/report">Report</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                </ul>
            </div>
        </div>
    );
};

export default UserProfile;
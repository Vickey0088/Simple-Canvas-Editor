import React from 'react';
import './Home.css';

// --- Home Page Component (Landing Page) ---
const Home = ({ onNavigateToEditor }) => {

    return (
        <div className="home-container">
            <div className="home-card">
                <h1 className="home-title">
                    Lightweight Canvas Editor
                </h1>
                <p className="home-description">
                    Create, draw, and share shapes and text. Your work is saved automatically!
                </p>
                <button
                    onClick={onNavigateToEditor}
                    className="home-button"
                >
                    Create New Canvas
                </button>
                <p className="home-footer">
                    Uses Fabric.js for drawing and Firestore for persistence.
                </p>
            </div>
        </div>
    );
};

export default Home;

import React, { useState } from 'react';
import Home from './Home';
import CanvasEditor from './CanvasEditor';

// --- Main App Component ---
const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const navigateToEditor = () => {
        setCurrentPage('editor');
    };

    const navigateToHome = () => {
        setCurrentPage('home');
    };

    return (
        <>
            {currentPage === 'home' && <Home onNavigateToEditor={navigateToEditor} />}
            {currentPage === 'editor' && <CanvasEditor onNavigateToHome={navigateToHome} />}
        </>
    );
};

export default App;

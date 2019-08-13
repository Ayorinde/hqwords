import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MainLayout from './layouts/Main';

// import './styles/settings.css';
// import './index.css';
// import './styles/main.css';

function App() {
    return (
        <div className="app">
            <MainLayout />
        </div>

    );
}

export default App;

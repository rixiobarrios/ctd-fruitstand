// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FruitScreen from './screens/FruitScreen.js';
import FruitDetails from './screens/FruitDetails.js';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/details" element={<FruitDetails />} />
                <Route path="/" element={<FruitScreen />} />
            </Routes>
        </Router>
    );
};

export default App;

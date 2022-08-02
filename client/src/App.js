import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FruitScreen from './screens/FruitScreen.js';
import FruitDetails from './screens/FruitDetails.js';

const App = () => {
    return (
        <>
            <header className="app-header">
                <div className="overlay"></div>
            </header>
            <Router>
                <Routes>
                    <Route path="/details/:id" element={<FruitDetails />} />
                    <Route path="/" element={<FruitScreen />} />
                </Routes>
            </Router>
            <footer className="footer">
                <div className="credits">
                    © 2022 Designed & Built by{' '}
                    <a href="https://rixiobarrios.github.io">Rixio Barrios</a>{' '}
                    for{' '}
                    <a href="https://www.codethedream.org">Code The Dream</a>
                </div>
            </footer>
        </>
    );
};

export default App;

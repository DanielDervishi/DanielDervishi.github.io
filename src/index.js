import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Particles from 'particlesjs';
import { BrowserRouter as Router } from 'react-router-dom';

console.log("got here")
const root = ReactDOM.createRoot(document.getElementById('root'));
Particles.init({
    selector: '.background',
    color: "#66fcf2"
});
root.render(
    <Router>
        <App />
    </Router>
);




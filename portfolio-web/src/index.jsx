import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import initialize from './bootstrap';
import App from './App';

initialize();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

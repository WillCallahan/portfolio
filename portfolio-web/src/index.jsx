import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import initialize from './bootstrap';
import App from './App';

initialize();

ReactDOM.render(<App />, document.getElementById('root'));

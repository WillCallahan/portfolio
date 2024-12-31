import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Portfolio from './components/App';
import './App.css';

const App = () => (
	<BrowserRouter>
		<div>
			<Route path="/" component={Portfolio}/>
		</div>
	</BrowserRouter>
);

export default App;
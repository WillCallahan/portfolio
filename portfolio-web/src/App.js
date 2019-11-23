import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Portfolio from './components/App';
import './App.css';
import backstretch from 'jquery.backstretch'
import jquery from 'jquery'

const App = () => (
	<BrowserRouter>
		<div>
			<Route path="/" component={Portfolio}/>
		</div>
	</BrowserRouter>
);

export default App;
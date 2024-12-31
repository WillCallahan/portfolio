import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Portfolio from './components/App';
import './App.css';

const App = () => (
	<BrowserRouter>
		<div>
			<Routes>
				<Route path="/" element={<Portfolio />}/>
			</Routes>
		</div>
	</BrowserRouter>
);

export default App;
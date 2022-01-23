import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

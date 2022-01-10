import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';

function App() {
	const [tasks, setTasks] = React.useState([]);
	const [projects, setProjects] = React.useState([]);
	const [sidebarIsHidden, setSidebarIsHidden] = React.useState(false);

	return (
		<div className="App">
			<Router>
				<Header
					sidebarIsHidden={sidebarIsHidden}
					setSidebarIsHidden={setSidebarIsHidden}
				/>
				<Main sidebarIsHidden={sidebarIsHidden} />
			</Router>
		</div>
	);
}

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import useTasks from './hooks/useTasks';
import useProjects from './hooks/useProjects';
import { db } from './firebase';

function App() {
	const [tasks, setTasks] = React.useState([]);
	const [projects, setProjects] = React.useState([]);
	const [sidebarIsHidden, setSidebarIsHidden] = React.useState(false);
	const { getTasks } = useTasks();
	const { getProjects } = useProjects();

	React.useEffect(() => getTasks(db, setTasks), []);
	React.useEffect(() => getProjects(db, setProjects), []);

	return (
		<div className="App">
			<Router>
				<Header
					sidebarIsHidden={sidebarIsHidden}
					setSidebarIsHidden={setSidebarIsHidden}
				/>
				<Main
					sidebarIsHidden={sidebarIsHidden}
					tasks={tasks}
					setTasks={setTasks}
					projects={projects}
					setProjects={setProjects}
				/>
			</Router>
		</div>
	);
}

export default App;

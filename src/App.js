import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { db } from './firebase';
import Header from './components/Header';
import Main from './components/Main';
import useTasks from './hooks/useTasks';
import useProjects from './hooks/useProjects';
import { TasksContext } from './contexts/TasksContext';
import { ProjectsContext } from './contexts/ProjectsContext';

function App() {
	const [tasks, setTasks] = useState([]);
	const [projects, setProjects] = useState([]);
	const [sidebarIsHidden, setSidebarIsHidden] = useState(false);
	const { getTasks } = useTasks();
	const { getProjects } = useProjects();

	//TODO: Probably need to remove the setState part from the getTasks/getProjects as well
	useEffect(() => getTasks(db, setTasks), []);
	useEffect(() => getProjects(db, setProjects), []);

	return (
		<div className="App">
			<ProjectsContext.Provider value={{ projects }}>
				<TasksContext.Provider value={{ tasks }}>
					<Router>
						<Header
							sidebarIsHidden={sidebarIsHidden}
							setSidebarIsHidden={setSidebarIsHidden}
						/>
						<Main sidebarIsHidden={sidebarIsHidden}/>
					</Router>
				</TasksContext.Provider>
			</ProjectsContext.Provider>
		</div>
	);
}

export default App;

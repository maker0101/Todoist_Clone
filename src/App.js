import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import { TaskModalContext } from './contexts/TaskModalContext';
import { TaskFormContext } from './contexts/TaskFormContext';

function App() {
	const [isSidebarHidden, setIsSidebarHidden] = useState(false);
	const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
	const [taskForm, setTaskForm] = useState({
		id: '',
		name: '',
		description: '',
		dueDate: '',
		projectId: 'GtbY3fGVBVrTJmJH4IGd',
	});

	return (
		<div className="App">
			<TaskModalContext.Provider
				value={{ isTaskModalOpen, setIsTaskModalOpen }}
			>
				<TaskFormContext.Provider value={{ taskForm, setTaskForm }}>
					<Router>
						<Header
							isSidebarHidden={isSidebarHidden}
							setIsSidebarHidden={setIsSidebarHidden}
						/>
						<Main isSidebarHidden={isSidebarHidden} />
					</Router>
				</TaskFormContext.Provider>
			</TaskModalContext.Provider>
		</div>
	);
}

export default App;

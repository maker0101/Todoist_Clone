import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { TaskModalContext } from './contexts/TaskModalContext';
import { TaskFormContext } from './contexts/TaskFormContext';
import { SelectedProjectContext } from './contexts/SelectedProjectContext';

function App() {
	const [isSidebarHidden, setIsSidebarHidden] = useState(false);
	const [selectedProject, setSelectedProject] = useState('');
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
			<SelectedProjectContext.Provider
				value={{ selectedProject, setSelectedProject }}>
				<TaskModalContext.Provider
					value={{ isTaskModalOpen, setIsTaskModalOpen }}>
					<TaskFormContext.Provider value={{ taskForm, setTaskForm }}>
						<Header
							isSidebarHidden={isSidebarHidden}
							setIsSidebarHidden={setIsSidebarHidden}
						/>
						<Main isSidebarHidden={isSidebarHidden} />
					</TaskFormContext.Provider>
				</TaskModalContext.Provider>
			</SelectedProjectContext.Provider>
		</div>
	);
}

export default App;

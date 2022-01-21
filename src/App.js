import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import { TaskModalContext } from './contexts/TaskModalContext';
import useTaskModal from './hooks/useTaskModal';

function App() {
	const [isSidebarHidden, setIsSidebarHidden] = useState(false);
	const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

	return (
		<div className="App">
			<TaskModalContext.Provider
				value={{ isTaskModalOpen, setIsTaskModalOpen }}
			>
				<Router>
					<Header
						isSidebarHidden={isSidebarHidden}
						setIsSidebarHidden={setIsSidebarHidden}
					/>
					<Main isSidebarHidden={isSidebarHidden} />
				</Router>
			</TaskModalContext.Provider>
		</div>
	);
}

export default App;

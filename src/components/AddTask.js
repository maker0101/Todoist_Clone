import { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import TaskForm from './TaskForm';
import useTaskForm from '../hooks/useTaskForm';

export default function AddTask({ selectedProjectId }) {
	const [isTaskFormHidden, setIsTaskFormHidden] = useState(true);
	const { populateTaskForm } = useTaskForm();

	const openTaskForm = () => {
		populateTaskForm();
		setIsTaskFormHidden(() => !isTaskFormHidden);
	};

	return (
		<>
			<div className="task">
				{isTaskFormHidden ? (
					<div className="addTask__line" onClick={() => openTaskForm()}>
						<VscAdd className="addTask__icon" />
						<div className="addTask__text">Add Task</div>
					</div>
				) : (
					<TaskForm
						selectedProjectId={selectedProjectId}
						isTaskFormHidden={isTaskFormHidden}
						setIsTaskFormHidden={setIsTaskFormHidden}
					/>
				)}
			</div>
		</>
	);
}

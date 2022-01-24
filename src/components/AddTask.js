import { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import TaskForm from './TaskForm';
import useTaskForm from '../hooks/useTaskForm';

export default function AddTask({ selectedProjectId, dueDate }) {
	const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
	const { handleTaskFormOpen } = useTaskForm();

	return (
		<>
			<div className="task">
				{isTaskFormOpen ? (
					<TaskForm
						selectedProjectId={selectedProjectId}
						isTaskFormOpen={isTaskFormOpen}
						setIsTaskFormOpen={setIsTaskFormOpen}
					/>
				) : (
					<div
						className="addTask__line"
						onClick={() => handleTaskFormOpen(setIsTaskFormOpen, dueDate)}>
						<VscAdd className="addTask__icon" />
						<div className="addTask__text">Add Task</div>
					</div>
				)}
			</div>
		</>
	);
}

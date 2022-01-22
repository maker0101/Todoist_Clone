import { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import TaskForm from './TaskForm';
import useTaskForm from '../hooks/useTaskForm';

export default function AddTask({ selectedProjectId }) {
	const [isTaskFormHidden, setIsTaskFormHidden] = useState(true);
	const { toggleIsTaskFormHidden } = useTaskForm();

	return (
		<>
			<div className="task">
				{isTaskFormHidden ? (
					<div
						className="addTask__line"
						onClick={() =>
							toggleIsTaskFormHidden(isTaskFormHidden, setIsTaskFormHidden)
						}
					>
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

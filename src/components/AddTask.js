import { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import TaskForm from './TaskForm';

export default function AddTask({ selectedProjectId }) {
	const [isTaskFormHidden, setIsTaskFormHidden] = useState(true);

	return (
		<>
			<div className="task">
				{isTaskFormHidden ? (
					<div
						className="addTask__line"
						onClick={() =>
							setIsTaskFormHidden(() => !isTaskFormHidden)
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

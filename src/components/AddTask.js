import { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import TaskForm from './TaskForm';
import useTaskForm from '../hooks/useTaskForm';

export default function AddTask(props) {
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
						projects={props.projects}
						selectedProject={props.selectedProject}
						tasks={props.tasks}
						isTaskFormHidden={isTaskFormHidden}
						setIsTaskFormHidden={setIsTaskFormHidden}
					/>
				)}
			</div>
		</>
	);
}

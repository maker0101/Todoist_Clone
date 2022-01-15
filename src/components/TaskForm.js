import React from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebase';
import useTasks from '../hooks/useTasks';
import useTaskForm from '../hooks/useTaskForm';

export default function TaskForm(props) {
	const [taskForm, setTaskForm] = React.useState({
		name: '',
		description: '',
		dueDate: '',
		projectId: 'GtbY3fGVBVrTJmJH4IGd',
	});
	const { createTask } = useTasks();
	const { clearTaskForm, autoSelectProjectId } = useTaskForm();
	const selectedProject = props.selectedProject ? props.selectedProject.id : '';
	const location = useLocation();

	React.useEffect(
		() => autoSelectProjectId(taskForm, setTaskForm, selectedProject),
		[selectedProject, location, props.tasks]
	);

	console.log(taskForm);

	return (
		<form
			className="addTaskForm"
			onSubmit={(e) => {
				createTask(
					e,
					db,
					taskForm.name,
					taskForm.description,
					taskForm.dueDate,
					taskForm.projectId,
					'userid1',
					setTaskForm
				);
				clearTaskForm(setTaskForm, selectedProject);
			}}
		>
			<div className="addTaskForm__inputContainer">
				<input
					required
					className="input input__name"
					type="text"
					id="taskName"
					name="name"
					value={taskForm.name}
					placeholder="Task name"
					onChange={(e) => setTaskForm({ ...taskForm, name: e.target.value })}
				/>
				<textarea
					className="input input__description"
					type="text"
					id="taskDescription"
					name="description"
					value={taskForm.description}
					placeholder="Description"
					onChange={(e) =>
						setTaskForm({ ...taskForm, description: e.target.value })
					}
				/>
				<div>
					<input
						type="date"
						placeholder="Schedule"
						value={taskForm.dueDate ? taskForm.dueDate.toISOString().split('T')[0] : ''}
						onChange={(e) => setTaskForm({ ...taskForm, dueDate: new Date(e.target.value) })}
					/>
					<select
						value={taskForm.projectId}
						onChange={(e) =>
							setTaskForm({ ...taskForm, projectId: e.target.value })
						}
					>
						{props.projects.map((project) => (
							<option key={project.id} value={project.id}>
								{project.name}
							</option>
						))}
					</select>
				</div>
			</div>
			<input className="button__primary" type="submit" value="Add Task" />
		</form>
	);
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebase';
import useCrudTasks from '../hooks/useCrudTasks';
import useProjects from '../hooks/useProjects';
import useTaskForm from '../hooks/useTaskForm';
import { dateToFormInput } from '../utilities/transform-dates';

export default function TaskForm({
	selectedProjectId,
	isTaskFormHidden,
	setIsTaskFormHidden,
}) {
	const { tasks } = useCrudTasks();
	const { projects } = useProjects();
	const {
		taskForm,
		setTaskForm,
		handleTaskFormSubmit,
		autoSelectProjectId,
		toggleIsTaskFormHidden,
	} = useTaskForm();
	const location = useLocation();

	useEffect(
		() => autoSelectProjectId(selectedProjectId),
		[selectedProjectId, location, tasks]
	);

	return (
		<form
			className="taskForm"
			onSubmit={(e) => {
				handleTaskFormSubmit(e, db, taskForm, 'userid1', selectedProjectId);
			}}
		>
			<div className="taskForm__inputs">
				<input
					required
					autoFocus
					className="taskform__input taskForm__name"
					type="text"
					id="taskName"
					name="name"
					value={taskForm.name}
					placeholder="Task name"
					onChange={(e) => setTaskForm({ ...taskForm, name: e.target.value })}
				/>
				<textarea
					className="taskform__input taskForm__description"
					type="text"
					id="taskDescription"
					name="description"
					value={taskForm.description}
					placeholder="Description"
					onChange={(e) =>
						setTaskForm({ ...taskForm, description: e.target.value })
					}
				/>
				<div className="task__selects">
					<input
						className="taskForm__select"
						type="date"
						placeholder="Schedule"
						value={dateToFormInput(taskForm.dueDate)}
						onChange={(e) =>
							setTaskForm({ ...taskForm, dueDate: new Date(e.target.value) })
						}
					/>
					<select
						className="taskForm__select"
						value={taskForm.projectId}
						onChange={(e) =>
							setTaskForm({ ...taskForm, projectId: e.target.value })
						}
					>
						{projects.map((project) => (
							<option key={project.id} value={project.id}>
								{project.name}
							</option>
						))}
					</select>
				</div>
			</div>
			<button
				className="button button__primary"
				type="submit"
				value=""
				disabled={taskForm.name ? false : true}
			>
				Add Task
			</button>
			<button
				className="button button__secondary"
				type="button"
				onClick={() =>
					toggleIsTaskFormHidden(isTaskFormHidden, setIsTaskFormHidden)
				}
			>
				Cancel
			</button>
		</form>
	);
}

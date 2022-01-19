import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebase';
import useTasks from '../hooks/useTasks';
import useProjects from '../hooks/useProjects';
import useTaskForm from '../hooks/useTaskForm';

export default function TaskForm({
	selectedProjectId,
	isTaskFormHidden,
	setIsTaskFormHidden,
}) {
	const { tasks, createTask } = useTasks();
	const { projects } = useProjects();
	const {
		taskForm,
		setTaskForm,
		clearTaskForm,
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
				clearTaskForm(selectedProjectId);
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
						value={
							taskForm.dueDate
								? taskForm.dueDate.toISOString().split('T')[0]
								: ''
						}
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

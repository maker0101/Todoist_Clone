import { useState } from 'react';
import useCrudTasks from './useCrudTasks';

export default function useTaskForm() {
	const [taskForm, setTaskForm] = useState({
		name: '',
		description: '',
		dueDate: '',
		projectId: 'GtbY3fGVBVrTJmJH4IGd',
	});
	const { createTask } = useCrudTasks();

	const clearTaskForm = (projectId) => {
		setTaskForm({
			name: '',
			description: '',
			dueDate: '',
			projectId: projectId,
		});
	};

	const autoSelectProjectId = (selectedProject) =>
		setTaskForm({
			...taskForm,
			projectId: selectedProject ? selectedProject : 'GtbY3fGVBVrTJmJH4IGd',
		});

	const toggleIsTaskFormHidden = (isTaskFormHidden, setIsTaskFormHiddenFn) => {
		setIsTaskFormHiddenFn(() => !isTaskFormHidden);
	};

	const handleTaskFormSubmit = (e, db, taskForm, userId, selectedProjectId) => {
		createTask(e, db, taskForm, userId);
		clearTaskForm(selectedProjectId);
	};

	return {
		taskForm,
		setTaskForm,
		handleTaskFormSubmit,
		clearTaskForm,
		autoSelectProjectId,
		toggleIsTaskFormHidden,
	};
}

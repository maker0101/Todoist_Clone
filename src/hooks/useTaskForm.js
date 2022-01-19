import { useState } from 'react';

export default function useTaskForm() {
	const [taskForm, setTaskForm] = useState({
		name: '',
		description: '',
		dueDate: '',
		projectId: 'GtbY3fGVBVrTJmJH4IGd',
	});

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

	return {
		taskForm,
		setTaskForm,
		clearTaskForm,
		autoSelectProjectId,
		toggleIsTaskFormHidden,
	};
}

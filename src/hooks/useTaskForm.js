export default function () {
	const clearTaskForm = (setTaskFormFn, projectId) => {
		setTaskFormFn({
			name: '',
			description: '',
			dueDate: '',
			projectId: projectId,
		});
	};

	const autoSelectProjectId = (taskForm, setTaskFormFn, selectedProject) => setTaskFormFn({
		...taskForm,
		projectId: selectedProject ? selectedProject : 'GtbY3fGVBVrTJmJH4IGd',
	});

	return { clearTaskForm, autoSelectProjectId };
}

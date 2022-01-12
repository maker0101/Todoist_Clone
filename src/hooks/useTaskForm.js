export default function () {
	const clearTaskForm = (setTaskFormFn, projectId) => {
		setTaskFormFn({
			name: '',
			description: '',
			dueDate: '',
			projectId: projectId,
		});
	};

	return { clearTaskForm };
}

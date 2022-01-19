import useTasks from '../hooks/useTasks';

export default function filterTasks() {
	const { tasks, isTaskDue, isTaskOverdue } = useTasks();

	const filterTasksByProjectId = (projectId) =>
		tasks.filter((task) => task.projectId === projectId);

	const filterTasksByDueDate = (dateObject) =>
		tasks.filter((task) => isTaskDue(task, dateObject));

	const filterTasksOverdue = () => tasks.filter((task) => isTaskOverdue(task));

	return {
		filterTasksByProjectId,
		filterTasksByDueDate,
		filterTasksOverdue,
	};
}

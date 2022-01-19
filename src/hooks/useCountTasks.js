import useTasks from './useTasks';

export default function useCountTasks() {
	const { isTaskDue, isTaskOverdue } = useTasks();

	const countTasksOfProject = (tasks, projectId) =>
		tasks.filter((task) => task.projectId === projectId).length;

	const countTasksOnDate = (tasks, dateObject) =>
		tasks.filter((task) => isTaskDue(task, dateObject)).length;

	const countOverdueTasks = (tasks) =>
		tasks.filter((task) => isTaskOverdue(task)).length;

	const countTasksOfNavItems = (tasks, item) => {
		switch (item.name) {
			case 'Inbox':
				return countTasksOfProject(tasks, item.id);
			case 'Today':
				return countTasksOnDate(tasks, new Date()) + countOverdueTasks(tasks);
			case 'Upcoming':
				return '';
			default:
				break;
		}
	};

	return {
		countTasksOfProject,
		countTasksOfNavItems
	};
}

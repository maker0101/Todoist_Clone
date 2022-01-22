import useCrudTasks from './useCrudTasks';
import { isTaskDue, isTaskOverdue } from '../utilities/query-task';

export default function useFilterTasks() {
	const { tasks } = useCrudTasks();

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

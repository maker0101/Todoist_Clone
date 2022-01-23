import { dateToDayMonth } from './transform-dates';

export const isTaskDue = (task, dateObject) => {
	const thisDay = dateToDayMonth(dateObject.toDateString());
	const dueDate = dateToDayMonth(task.dueDate);
	return dueDate === thisDay;
};

export const isTaskOverdue = (task) => {
	const today = new Date();
	const taskDueDate = new Date(task.dueDate);
	return taskDueDate && taskDueDate < today;
};

import { dateToDateWithoutTime, timestampToDate } from './transform-dates';

export const isTaskDue = (task, dateObject) => {
	const thisDay = dateObject.toDateString();
	const taskDueDate = task.dueDate
		? new Date(task.dueDate.seconds * 1000).toDateString()
		: '';
	return taskDueDate === thisDay;
};

export const isTaskOverdue = (task) => {
	const today = dateToDateWithoutTime(new Date());
	const taskDueDate = timestampToDate(task.dueDate);
	return Boolean(taskDueDate) && taskDueDate < today;
};

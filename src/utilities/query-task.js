import { dateToDayMonth, harmonizeDateTime } from './transform-dates';

export const isTaskDueDateDefined = (task) => {
  return Boolean(task.dueDate);
};

export const isTaskDue = (task, dateObject) => {
  const thisDay = dateToDayMonth(dateObject.toDateString());
  const dueDate = dateToDayMonth(task.dueDate);
  return dueDate === thisDay;
};

export const isTaskOverdue = (task) => {
  const today = harmonizeDateTime(new Date());
  const taskDueDate = harmonizeDateTime(new Date(task.dueDate));
  return taskDueDate && taskDueDate < today;
};

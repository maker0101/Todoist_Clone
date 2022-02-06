import { dateToDayMonth, harmonizeDateTime } from './transform-dates';
import { dateToYearMonthDay } from './transform-dates';

export const isTaskDueDateDefined = (task) => {
  return !!task.dueDate;
};

export const isTaskDue = (task, dateObject) => {
  const thisDay = dateToDayMonth(dateObject.toDateString());
  const dueDate = dateToDayMonth(task.dueDate);
  return dueDate === thisDay;
};

export const isTaskDueToday = (task) => {
  if (!task.dueDate) return false;
  const today = dateToYearMonthDay(harmonizeDateTime(new Date()));
  return task.dueDate === today;
};

export const isTaskOverdue = (task) => {
  const today = harmonizeDateTime(new Date());
  const taskDueDate = harmonizeDateTime(new Date(task.dueDate));
  return taskDueDate && taskDueDate < today;
};

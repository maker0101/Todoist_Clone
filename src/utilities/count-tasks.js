import { isTaskDue, isTaskOverdue } from './query-task';

const countTasksOnDate = (tasks, dateObject) =>
  tasks.filter((task) => isTaskDue(task, dateObject)).length;

const countTasksOverdue = (tasks) =>
  tasks.filter((task) => isTaskOverdue(task)).length;

export const countTasksOfProject = (tasks, projectId) =>
  tasks.filter((task) => task.projectId === projectId).length;

export const countTasksOfNavItems = (tasks, item) => {
  switch (item.name) {
    case 'Inbox':
      return countTasksOfProject(tasks, item.id);
    case 'Today':
      return countTasksOnDate(tasks, new Date()) + countTasksOverdue(tasks);
    case 'Upcoming':
      return '';
    default:
      break;
  }
};

import { isTaskDueDateDefined, isTaskDue, isTaskOverdue } from './query-task';

export const filterTasksByProjectId = (tasks, projectId) =>
  tasks.filter((task) => task.projectId === projectId);

export const filterTasksByDueDate = (tasks, dateObject) =>
  tasks.filter(
    (task) => isTaskDueDateDefined(task) && isTaskDue(task, dateObject)
  );

export const filterTasksOverdue = (tasks) =>
  tasks.filter((task) => isTaskDueDateDefined(task) && isTaskOverdue(task));

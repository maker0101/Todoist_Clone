export const sortTasksByDueDateAsc = (tasks) => {
  if (!tasks) return;
  return tasks
    .filter((task) => Boolean(task.dueDate))
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
};

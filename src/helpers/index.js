import { collatedTasks } from '../constants/index';

export const collatedTasksExist = (selectedProject) =>
	collatedTasks.find((task) => task.key === selectedProject);

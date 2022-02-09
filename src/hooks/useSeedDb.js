import { SEED_PROJECTS } from '../constants/seed-projects';
import { SEED_TASKS } from '../constants/seed-tasks';
import useProjects from './useProjects';
import useTasks from './useTasks';

const useSeedDb = () => {
  const { addProject } = useProjects();
  const { addTask } = useTasks();

  const seedProjects = () =>
    SEED_PROJECTS.forEach((project) => addProject(project));

  const seedTasks = () => {
    SEED_TASKS.forEach((task) => addTask(task));
  };

  const seedDb = () => {
    seedProjects();
    seedTasks();
  };
  return { seedDb };
};

export default useSeedDb;

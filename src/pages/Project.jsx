import { useContext } from 'react';
import useTasks from '../hooks/useTasks';
import Task from '../components/Task/Task';
import TaskAdd from '../components/Task/TaskAdd';
import { SelectedProjectContext } from '../contexts/SelectedProjectContext';

const Project = () => {
  const { selectedProject } = useContext(SelectedProjectContext);
  const { getTasks } = useTasks();
  const projectTasks = getTasks({ projectId: selectedProject.id });

  return (
    <div className='content'>
      <h1 className='content__title' data-cy='content__title'>
        {selectedProject?.name}
      </h1>
      {projectTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <TaskAdd selectedProjectId={selectedProject?.id} />
    </div>
  );
};

export default Project;

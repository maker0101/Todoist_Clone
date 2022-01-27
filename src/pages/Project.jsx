import { useContext } from 'react';
import useCrudTasks from '../hooks/useCrudTasks';
import Task from '../components/Task';
import TaskAdd from '../components/TaskAdd';
import { SelectedProjectContext } from '../contexts/SelectedProjectContext';
import { filterTasksByProjectId } from '../utilities/filter-tasks';

const Project = () => {
  const { selectedProject } = useContext(SelectedProjectContext);
  const { tasks } = useCrudTasks();
  const projectTasks = filterTasksByProjectId(tasks, selectedProject.id);

  return (
    <div className='content'>
      <h1 className='content__title'>
        {selectedProject && selectedProject.name}
      </h1>
      {projectTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <TaskAdd selectedProjectId={selectedProject ? selectedProject.id : ''} />
    </div>
  );
};

export default Project;

import { useContext } from 'react';
import { TaskFormContext } from '../../contexts/TaskFormContext';
import useProjects from '../../hooks/useProjects';

const TaskFormProject = () => {
  const { taskForm, setTaskForm } = useContext(TaskFormContext);
  const { projects } = useProjects();

  return (
    <select
      className='taskForm__select'
      value={taskForm.projectId}
      onChange={(e) => setTaskForm({ ...taskForm, projectId: e.target.value })}>
      {projects.map((project) => (
        <option key={project.id} value={project.id}>
          {project.name}
        </option>
      ))}
    </select>
  );
};

export default TaskFormProject;

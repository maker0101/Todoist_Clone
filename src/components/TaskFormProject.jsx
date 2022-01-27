import useProjects from '../hooks/useProjects';

const TaskFormProject = ({ taskForm, setTaskForm }) => {
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

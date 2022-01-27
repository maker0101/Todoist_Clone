import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { VscCircleFilled, VscAdd, VscEdit } from 'react-icons/vsc';
import useCrudTasks from '../hooks/useCrudTasks';
import useCountTasks from '../hooks/useCountTasks';
import useProjectModal from '../hooks/useProjectModal';
import { getColorHEXById } from '../utilities/get-color';
import { ProjectModalContext } from '../contexts/ProjectModalContext';

const SidebarProject = ({ project }) => {
  const { tasks } = useCrudTasks();
  const { setIsProjectModalOpen } = useContext(ProjectModalContext);
  const { countTasksOfProject } = useCountTasks();
  const { handleProjectModalOpen } = useProjectModal();

  return (
    <NavLink
      to={`/project/${project.id}`}
      className='sidebar__item'>
      <VscCircleFilled
        className='sidebar__icon'
        style={{ color: getColorHEXById(project.colorId) }}
      />
      <div>{project.name}</div>
      <div className='sidebar__info'>
        {countTasksOfProject(tasks, project.id)}
      </div>
      <VscEdit
        className='sidebar__edit'
        onClick={() => handleProjectModalOpen(setIsProjectModalOpen, project)}
      />
    </NavLink>
  );
};

export default SidebarProject;

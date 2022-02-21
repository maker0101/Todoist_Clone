import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { VscCircleFilled, VscEdit } from 'react-icons/vsc';
import useTasks from '../../hooks/useTasks';
import useProjectModal from '../../hooks/useProjectModal';
import useMediaQuery from '../../hooks/useMediaQuery';
import { getColorHEXById } from '../../utilities/get-color';
import { countTasksOfProject } from '../../utilities/count-tasks';
import { SidebarContext } from '../../contexts/SidebarContext';

const SidebarProject = ({ project }) => {
  const { tasks } = useTasks();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const { handleProjectModalOpen } = useProjectModal();
  const { isDesktop } = useMediaQuery();

  return (
    <NavLink
      to={`/project/${project.id}`}
      className='sidebar__item'
      data-cy='sidebar__project'>
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
        onClick={() => handleProjectModalOpen(project)}
      />
    </NavLink>
  );
};

export default SidebarProject;

import { useState, useContext } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { VscAdd } from 'react-icons/vsc';
import useProjects from '../../hooks/useProjects';
import useProjectModal from '../../hooks/useProjectModal';
import SidebarProject from './SidebarProject';
import { defaultProject } from '../../utilities/default-project';

const SidebarProjects = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const { getProjectsExceptInbox } = useProjects();
  const { handleProjectModalOpen } = useProjectModal();

  const toggleAccordion = () => setIsAccordionOpen(() => !isAccordionOpen);

  return (
    <div className='sidebar__section'>
      <div className='sidebar__item sidebar__sectionTitle'>
        <BsChevronDown
          className={`sidebar__icon sidebar__iconChevron ${
            !isAccordionOpen && 'sidebar__iconChevronNotShowing'
          }`}
          onClick={toggleAccordion}
        />
        <h2 onClick={toggleAccordion}>Projects</h2>
        <VscAdd
          className='sidebar__addProject'
          onClick={() => handleProjectModalOpen(defaultProject)}
        />
      </div>
      {isAccordionOpen &&
        getProjectsExceptInbox().map((project) => (
          <SidebarProject key={project.id} project={project} />
        ))}
    </div>
  );
};

export default SidebarProjects;

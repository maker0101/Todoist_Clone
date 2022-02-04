import { useContext, useRef } from 'react';
import ProjectForm from '../ProjectForm/ProjectForm';
import { ProjectModalContext } from '../../contexts/ProjectModalContext';
import { closeModalOnOverlayClick } from '../../utilities/close-modal-on-overlay-click';

const ProjectModal = () => {
  const { setIsProjectModalOpen } = useContext(ProjectModalContext);
  const projectModalOverlayRef = useRef(null);

  closeModalOnOverlayClick(projectModalOverlayRef, () =>
    setIsProjectModalOpen(false)
  );

  return (
    <div ref={projectModalOverlayRef} className='modal__bgOverlay'>
      <div className='modal__formContainer'>
        <ProjectForm />
      </div>
    </div>
  );
};

export default ProjectModal;

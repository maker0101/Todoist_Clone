import { useContext, useRef } from 'react';
import ProjectForm from '../ProjectForm/ProjectForm';
import useModal from '../../hooks/useModal';
import { ProjectModalContext } from '../../contexts/ProjectModalContext';

const ProjectModal = () => {
  const { setIsProjectModalOpen } = useContext(ProjectModalContext);
  const projectModalOverlayRef = useRef(null);
  const { closeModalOnOverlayClick } = useModal();

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

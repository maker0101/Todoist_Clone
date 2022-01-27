import { useContext } from 'react';
import useProjectForm from './useProjectForm';
import { ProjectModalContext } from '../contexts/ProjectModalContext';

const useProjectModal = () => {
  const { setIsProjectModalOpen } = useContext(ProjectModalContext);
  const { populateProjectForm } = useProjectForm();

  const handleProjectModalOpen = (setIsProjectModalOpen, project) => {
    populateProjectForm(project);
    setIsProjectModalOpen(true);
  };

  return { handleProjectModalOpen };
};

export default useProjectModal;

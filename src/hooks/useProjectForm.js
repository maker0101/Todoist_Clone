import { useContext } from 'react';
import useProjects from './useProjects';
import { ProjectFormContext } from '../contexts/ProjectFormContext';
import { defaultProject } from '../utilities/default-project';
import { UserContext } from '../contexts/UserContext';

const useProjectForm = () => {
  const { user } = useContext(UserContext);
  const { setProjectForm, clearProjectForm } = useContext(ProjectFormContext);
  const { projects, updateProject, addProject } = useProjects();

  const populateProjectForm = (project = {}) => {
    let populatedProjectForm;
    if (project) {
      populatedProjectForm = {
        id: project.id || defaultProject.id,
        name: project?.name || defaultProject.name,
        isInbox: project?.isInbox || defaultProject.isInbox,
        colorId: project?.colorId || defaultProject.colorId,
        userId: project?.userId || defaultProject.userId,
      };
    } else {
      populatedProjectForm = defaultProject;
    }

    setProjectForm(populatedProjectForm);
  };

  const handleSubmit = (e, db, projectForm, setIsProjectModalOpen) => {
    e.preventDefault();

    const projectExists =
      projects.filter((project) => project.id === projectForm.id).length > 0;

    if (projectExists) {
      updateProject(db, projectForm);
    } else {
      addProject(db, projectForm);
    }

    setIsProjectModalOpen(false);
    clearProjectForm();
  };

  return {
    handleSubmit,
    populateProjectForm,
  };
};

export default useProjectForm;

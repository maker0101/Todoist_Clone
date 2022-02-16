import { useContext } from 'react';
import useProjects from './useProjects';
import { ProjectFormContext } from '../contexts/ProjectFormContext';
import { ProjectModalContext } from '../contexts/ProjectModalContext';
import { defaultProject } from '../utilities/default-project';
import { UserContext } from '../contexts/UserContext';

const useProjectForm = () => {
  const { user } = useContext(UserContext);
  const { setProjectForm, clearProjectForm } = useContext(ProjectFormContext);
  const { setIsProjectModalOpen } = useContext(ProjectModalContext);
  const { projects, updateProject, addProject } = useProjects();

  const populateProjectForm = (project = {}) => {
    let populatedProjectForm;
    if (project) {
      populatedProjectForm = {
        id: project.id || defaultProject.id,
        name: project?.name || defaultProject.name,
        isInbox: project?.isInbox || defaultProject.isInbox,
        colorId: project?.colorId || defaultProject.colorId,
        userId: project?.userId || user.uid,
      };
    } else {
      populatedProjectForm = defaultProject;
    }

    setProjectForm(populatedProjectForm);
  };

  const handleProjectSubmit = (e, project) => {
    e.preventDefault();
    const isProjectExisting = projects.some((proj) => proj.id === project.id);

    isProjectExisting ? updateProject(project) : addProject(project);
    setIsProjectModalOpen(false);
    clearProjectForm();
  };

  return {
    handleProjectSubmit,
    populateProjectForm,
  };
};

export default useProjectForm;

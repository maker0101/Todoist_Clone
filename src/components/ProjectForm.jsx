import { useContext } from 'react';
import { db } from '../firebase';
import useProjectForm from '../hooks/useProjectForm';
import { ProjectFormContext } from '../contexts/ProjectFormContext';
import { ProjectModalContext } from '../contexts/ProjectModalContext';
import ProjectFormInputName from './ProjectFormInputName';
import ProjectFormInputColor from './ProjectFormInputColor';
import ProjectFormButtons from './ProjectFormButtons';
import ProjectFormHeading from './ProjectFormHeading';

const ProjectForm = () => {
  const { projectForm } = useContext(ProjectFormContext);
  const { setIsProjectModalOpen } = useContext(ProjectModalContext);
  const { handleSubmit } = useProjectForm();

  return (
    <form
      className='projectForm'
      onSubmit={(e) =>
        handleSubmit(e, db, projectForm, 'userid1', setIsProjectModalOpen)
      }>
      <ProjectFormHeading />
      <div className='projectForm__inputs'>
        <ProjectFormInputName />
        <ProjectFormInputColor />
      </div>
      <ProjectFormButtons />
    </form>
  );
};

export default ProjectForm;

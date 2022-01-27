import { useContext } from 'react';
import { db } from '../../firebase';
import useProjectForm from '../../hooks/useProjectForm';
import { ProjectFormContext } from '../../contexts/ProjectFormContext';
import { ProjectModalContext } from '../../contexts/ProjectModalContext';
import ProjectFormHeading from './ProjectFormHeading';
import ProjectFormName from './ProjectFormName';
import ProjectFormColor from './ProjectFormColor';
import ProjectFormButtons from './ProjectFormButtons';

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
        <ProjectFormName />
        <ProjectFormColor />
      </div>
      <ProjectFormButtons />
    </form>
  );
};

export default ProjectForm;

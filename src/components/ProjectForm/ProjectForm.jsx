import { useContext } from 'react';
import useProjectForm from '../../hooks/useProjectForm';
import { ProjectFormContext } from '../../contexts/ProjectFormContext';
import ProjectFormHeading from './ProjectFormHeading';
import ProjectFormName from './ProjectFormName';
import ProjectFormColor from './ProjectFormColor';
import ProjectFormButtons from './ProjectFormButtons';

const ProjectForm = () => {
  const { projectForm } = useContext(ProjectFormContext);
  const { handleProjectSubmit } = useProjectForm();

  return (
    <form
      className='projectForm'
      onSubmit={(e) =>
        handleProjectSubmit(e, projectForm)
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

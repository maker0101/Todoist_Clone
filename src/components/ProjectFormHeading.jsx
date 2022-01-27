import { useContext } from 'react';
import { ProjectFormContext } from '../contexts/ProjectFormContext';

const ProjectFormHeading = () => {
  const { projectForm } = useContext(ProjectFormContext);

  const inEditMode = projectForm.id ? true : false;
  const formTitle = inEditMode ? 'Edit project' : 'Add project';

  return (
    <div className='projectForm__heading'>
      <h1 className='projectForm__title'>{formTitle}</h1>
    </div>
  );
};

export default ProjectFormHeading;

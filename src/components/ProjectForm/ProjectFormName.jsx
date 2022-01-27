import { useContext } from 'react';
import { ProjectFormContext } from '../../contexts/ProjectFormContext';

const ProjectFormName = () => {
  const { projectForm, setProjectForm } = useContext(ProjectFormContext);

  return (
    <>
      <label htmlFor='projectName'>
        <h2>Name</h2>
      </label>
      <input
        required
        autoFocus
        className='projectForm__input projectForm__name'
        type='text'
        id='projectName'
        name='name'
        value={projectForm.name}
        onChange={(e) =>
          setProjectForm({ ...projectForm, name: e.target.value })
        }
      />
    </>
  );
};

export default ProjectFormName;

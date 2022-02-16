import { useContext } from 'react';
import { VscTrash } from 'react-icons/vsc';
import useProjects from '../../hooks/useProjects';
import { ProjectFormContext } from '../../contexts/ProjectFormContext';
import { ProjectModalContext } from '../../contexts/ProjectModalContext';

const ProjectFormButtons = () => {
  const { projectForm } = useContext(ProjectFormContext);
  const { setIsProjectModalOpen } = useContext(ProjectModalContext);
  const { handleDeleteProject } = useProjects();

  return (
    <div className='projectForm__buttons'>
      <button
        className='button button__primary'
        type='submit'
        value=''
        disabled={!projectForm.name}>
        {projectForm.id ? 'Save' : 'Add'}
      </button>
      <button
        className='button button__secondary'
        type='button'
        onClick={() => setIsProjectModalOpen(false)}>
        Cancel
      </button>
      {projectForm.id && (
        <VscTrash
          className='projectForm__delete'
          onClick={() => handleDeleteProject(projectForm.id)}
        />
      )}
    </div>
  );
};

export default ProjectFormButtons;

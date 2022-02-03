import { useContext } from 'react';
import { db } from '../../firebase';
import { VscTrash } from 'react-icons/vsc';
import useProjects from '../../hooks/useProjects';
import { ProjectFormContext } from '../../contexts/ProjectFormContext';
import { ProjectModalContext } from '../../contexts/ProjectModalContext';

const ProjectFormButtons = () => {
  const { projectForm } = useContext(ProjectFormContext);
  const { setIsProjectModalOpen } = useContext(ProjectModalContext);
  const { handleDeleteProject } = useProjects();

  const inEditMode = projectForm.id ? true : false;
  const primaryBtnText = inEditMode ? 'Save' : 'Add';

  return (
    <div className='projectForm__buttons'>
      <button
        className='button button__primary'
        type='submit'
        value=''
        disabled={!projectForm.name}>
        {primaryBtnText}
      </button>
      <button
        className='button button__secondary'
        type='button'
        onClick={() => setIsProjectModalOpen(false)}>
        Cancel
      </button>
      {inEditMode && (
        <VscTrash
          className='projectForm__delete'
          onClick={() =>
            handleDeleteProject(db, projectForm.id, setIsProjectModalOpen)
          }
        />
      )}
    </div>
  );
};

export default ProjectFormButtons;

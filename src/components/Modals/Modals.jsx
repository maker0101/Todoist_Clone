import { useContext } from 'react';
import ProjectModal from './ProjectModal';
import TaskModal from './TaskModal';
import { ProjectModalContext } from '../../contexts/ProjectModalContext';
import { TaskModalContext } from '../../contexts/TaskModalContext';

const Modals = () => {
  const { isProjectModalOpen } = useContext(ProjectModalContext);
  const { isTaskModalOpen } = useContext(TaskModalContext);

  return (
    <>
      {isTaskModalOpen && <TaskModal />}
      {isProjectModalOpen && <ProjectModal />}
    </>
  );
};

export default Modals;

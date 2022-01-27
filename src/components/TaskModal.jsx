import { useContext, useRef } from 'react';
import TaskForm from './TaskForm';
import useModal from '../hooks/useModal';
import { TaskModalContext } from '../contexts/TaskModalContext';

const TaskModal = () => {
  const { setIsTaskModalOpen } = useContext(TaskModalContext);
  const { closeModalOnOverlayClick } = useModal();
  const taskModalOverlayRef = useRef(null);

  closeModalOnOverlayClick(taskModalOverlayRef, () =>
    setIsTaskModalOpen(false)
  );

  return (
    <div ref={taskModalOverlayRef} className='modal__bgOverlay'>
      <div className='modal__formContainer'>
        <TaskForm inModal='taskForm--inModal' />
      </div>
    </div>
  );
};

export default TaskModal;

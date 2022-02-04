import { useContext, useRef } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import { TaskModalContext } from '../../contexts/TaskModalContext';
import { closeModalOnOverlayClick } from '../../utilities/close-modal-on-overlay-click';

const TaskModal = () => {
  const { setIsTaskModalOpen } = useContext(TaskModalContext);
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

import { useContext } from 'react';
import { TaskFormContext } from '../../contexts/TaskFormContext';
import { TaskModalContext } from '../../contexts/TaskModalContext';
import useTaskForm from '../../hooks/useTaskForm';

const TaskFormButtons = ({ setIsTaskFormOpen }) => {
  const { taskForm } = useContext(TaskFormContext);
  const { isTaskModalOpen } = useContext(TaskModalContext);
  const { handleTaskFormCancel } = useTaskForm();

  const primaryBtnText = isTaskModalOpen && taskForm.id ? 'Save' : 'Add Task';

  return (
    <div className='taskForm__buttons'>
      <button
        className='button button__primary'
        type='submit'
        value=''
        disabled={!taskForm.name}>
        {primaryBtnText}
      </button>
      <button
        className='button button__secondary'
        type='button'
        onClick={() => handleTaskFormCancel(setIsTaskFormOpen)}>
        Cancel
      </button>
    </div>
  );
};

export default TaskFormButtons;

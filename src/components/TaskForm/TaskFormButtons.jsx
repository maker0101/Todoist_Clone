import { useContext } from 'react';
import { TaskModalContext } from '../../contexts/TaskModalContext';
import useTaskForm from '../../hooks/useTaskForm';

const TaskFormButtons = ({
  taskForm,
  selectedProjectId,
  setIsTaskFormOpen,
}) => {
  const { isTaskModalOpen, setIsTaskModalOpen } = useContext(TaskModalContext);
  const { handleTaskFormCancel } = useTaskForm();

  const primaryBtnText = isTaskModalOpen && taskForm.id ? 'Save' : 'Add Task';

  return (
    <div className='taskForm__buttons'>
      <button
        className='button button__primary'
        type='submit'
        value=''
        disabled={taskForm.name ? false : true}>
        {primaryBtnText}
      </button>
      <button
        className='button button__secondary'
        type='button'
        onClick={() =>
          handleTaskFormCancel(
            isTaskModalOpen,
            setIsTaskModalOpen,
            setIsTaskFormOpen,
            selectedProjectId
          )
        }>
        Cancel
      </button>
    </div>
  );
};

export default TaskFormButtons;

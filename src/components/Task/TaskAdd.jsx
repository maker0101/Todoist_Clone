import { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import TaskForm from '../TaskForm/TaskForm';
import useTaskForm from '../../hooks/useTaskForm';

const TaskAdd = ({ dueDate }) => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
  const { handleTaskFormOpen } = useTaskForm();

  return (
    <>
      <div className='task'>
        {isTaskFormOpen ? (
          <TaskForm
            isTaskFormOpen={isTaskFormOpen}
            setIsTaskFormOpen={setIsTaskFormOpen}
          />
        ) : (
          <div
            className='addTask__line'
            data-cy='addTask'
            onClick={() => handleTaskFormOpen(setIsTaskFormOpen, dueDate)}>
            <VscAdd className='addTask__icon' />
            <div className='addTask__text'>Add Task</div>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskAdd;

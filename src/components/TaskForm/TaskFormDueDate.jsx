import { useContext } from 'react';
import { TaskFormContext } from '../../contexts/TaskFormContext';

const TaskFormDueDate = () => {
  const { taskForm, setTaskForm } = useContext(TaskFormContext);

  return (
    <input
      className='taskForm__select'
      type='date'
      placeholder='Schedule'
      value={taskForm.dueDate}
      onChange={(e) => {
        setTaskForm({ ...taskForm, dueDate: e.target.value });
      }}
    />
  );
};

export default TaskFormDueDate;

import { useContext } from 'react';
import { TaskFormContext } from '../../contexts/TaskFormContext';

const TaskFormDesc = () => {
  const { taskForm, setTaskForm } = useContext(TaskFormContext);

  return (
    <textarea
      className='taskForm__input taskForm__description'
      data-cy='taskForm__desc'
      type='text'
      id='taskDescription'
      name='description'
      value={taskForm.description}
      placeholder='Description'
      onChange={(e) =>
        setTaskForm({ ...taskForm, description: e.target.value })
      }
    />
  );
};

export default TaskFormDesc;

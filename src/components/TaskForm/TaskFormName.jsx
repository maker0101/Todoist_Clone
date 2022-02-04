import { useContext } from 'react';
import { TaskFormContext } from '../../contexts/TaskFormContext';

const TaskFormName = () => {
  const { taskForm, setTaskForm } = useContext(TaskFormContext);

  return (
    <input
      required
      autoFocus
      className='taskForm__input taskForm__name'
      data-cy='taskForm__name'
      type='text'
      id='taskName'
      name='name'
      value={taskForm.name}
      placeholder='Task name'
      onChange={(e) => setTaskForm({ ...taskForm, name: e.target.value })}
    />
  );
};

export default TaskFormName;

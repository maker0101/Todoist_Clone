import { db } from '../../firebase-config';
import useCrudTasks from '../../hooks/useCrudTasks';

const TaskCheckbox = ({ task }) => {
  const { toggleIsChecked } = useCrudTasks();

  return (
    <label className='checkbox'>
      <input
        type='checkbox'
        checked={task.isChecked}
        onChange={() => toggleIsChecked(db, task.id, task.isChecked)}></input>
      <span className='checkbox__checkmark'></span>
    </label>
  );
};

export default TaskCheckbox;

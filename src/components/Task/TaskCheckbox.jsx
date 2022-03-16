import useTasks from '../../hooks/useTasks';

const TaskCheckbox = ({ task }) => {
  const { closeTask } = useTasks();

  return (
    <label className='checkbox'>
      <input
        type='checkbox'
        checked={task.isChecked}
        onChange={() => closeTask(task)}
        data-cy='checkbox'></input>
      <span className='checkbox__checkmark'></span>
    </label>
  );
};

export default TaskCheckbox;

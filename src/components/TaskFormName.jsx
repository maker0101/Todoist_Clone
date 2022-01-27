const TaskFormName = ({ taskForm, setTaskForm }) => {
  return (
    <input
      required
      autoFocus
      className='taskForm__input taskForm__name'
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

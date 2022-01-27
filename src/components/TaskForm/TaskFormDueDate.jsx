const TaskFormDueDate = ({ taskForm, setTaskForm }) => {
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

const TaskFormDesc = ({ taskForm, setTaskForm }) => {
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

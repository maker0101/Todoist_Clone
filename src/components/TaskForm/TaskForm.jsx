import { useContext } from 'react';
import { db } from '../../firebase';
import useTaskForm from '../../hooks/useTaskForm';
import { TaskFormContext } from '../../contexts/TaskFormContext';
import TaskFormName from './TaskFormName';
import TaskFormDesc from './TaskFormDesc';
import TaskFormDueDate from './TaskFormDueDate';
import TaskFormProject from './TaskFormProject';
import TaskFormButtons from './TaskFormButtons';

const TaskForm = ({ selectedProjectId, setIsTaskFormOpen, inModal }) => {
  const { taskForm, setTaskForm } = useContext(TaskFormContext);
  const { handleTaskFormSubmit } = useTaskForm();

  return (
    <form
      className={`taskForm ${inModal}`}
      data-cy='taskForm'
      onSubmit={(e) => {
        handleTaskFormSubmit(e, db, taskForm, 'userid1', selectedProjectId);
      }}>
      <div className='taskForm__inputs'>
        <TaskFormName taskForm={taskForm} setTaskForm={setTaskForm} />
        <TaskFormDesc taskForm={taskForm} setTaskForm={setTaskForm} />

        <div className='task__selects'>
          <TaskFormDueDate taskForm={taskForm} setTaskForm={setTaskForm} />
          <TaskFormProject taskForm={taskForm} setTaskForm={setTaskForm} />
        </div>
      </div>
      <TaskFormButtons
        taskForm={taskForm}
        selectedProjectId={selectedProjectId}
        setIsTaskFormOpen={setIsTaskFormOpen}
      />
    </form>
  );
};

export default TaskForm;

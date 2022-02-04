import { useContext } from 'react';
import { db } from '../../firebase-config';
import useTaskForm from '../../hooks/useTaskForm';
import { SelectedProjectContext } from '../../contexts/SelectedProjectContext';
import { TaskFormContext } from '../../contexts/TaskFormContext';
import TaskFormName from './TaskFormName';
import TaskFormDesc from './TaskFormDesc';
import TaskFormDueDate from './TaskFormDueDate';
import TaskFormProject from './TaskFormProject';
import TaskFormButtons from './TaskFormButtons';

const TaskForm = ({ setIsTaskFormOpen, inModal }) => {
  const { selectedProjectId } = useContext(SelectedProjectContext);
  const { taskForm } = useContext(TaskFormContext);
  const { handleTaskFormSubmit } = useTaskForm();

  return (
    <form
      className={`taskForm ${inModal}`}
      data-cy='taskForm'
      onSubmit={(e) => {
        handleTaskFormSubmit(e, db, taskForm, 'userid1', selectedProjectId);
      }}>
      <div className='taskForm__inputs'>
        <TaskFormName />
        <TaskFormDesc />

        <div className='task__selects'>
          <TaskFormDueDate />
          <TaskFormProject />
        </div>
      </div>
      <TaskFormButtons setIsTaskFormOpen={setIsTaskFormOpen} />
    </form>
  );
};

export default TaskForm;

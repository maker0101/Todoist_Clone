import { db } from '../../firebase-config';
import { VscTrash, VscEdit } from 'react-icons/vsc';
import useCrudTasks from '../../hooks/useCrudTasks';
import useTaskModal from '../../hooks/useTaskModal';
import TaskCheckbox from './TaskCheckbox';
import TaskDueDate from './TaskDueDate';

const Task = ({ task }) => {
  const { deleteTask } = useCrudTasks();
  const { handleTaskModalOpen } = useTaskModal();

  return (
    <>
      <div className='task' data-cy='task'>
        <div className='task__row'>
          <TaskCheckbox task={task} />
          <div className='task__name' onClick={() => handleTaskModalOpen(task)}>
            {task.name}
          </div>
          <div className='task__icons'>
            <VscTrash onClick={() => deleteTask(db, task.id)} />
            <VscEdit onClick={() => handleTaskModalOpen(task)} />
          </div>
        </div>
        <div
          className='task__row'
          style={{ display: task.description ? 'grid' : 'none' }}>
          <div
            className='task__description'
            onClick={() => handleTaskModalOpen(task)}>
            {task.description}
          </div>
        </div>
        <div
          className='task__row'
          style={{ display: task.dueDate ? 'grid' : 'none' }}>
          <TaskDueDate task={task} />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Task;

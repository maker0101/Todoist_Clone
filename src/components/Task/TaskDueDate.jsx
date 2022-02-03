import { BsCalendar4Event } from 'react-icons/bs';
import { dateToDayMonth } from '../../utilities/transform-dates';
import useTaskModal from '../../hooks/useTaskModal';

const TaskDueDate = ({ task }) => {
  const { handleTaskModalOpen } = useTaskModal();

  return (
    <div
      className='task__dueDateContainer'
      onClick={() => handleTaskModalOpen(task)}>
      <span className='task__dueDateIcon'>
        <BsCalendar4Event />
      </span>
      {task.dueDate && (
        <span className='task__dueDate'>{dateToDayMonth(task.dueDate)}</span>
      )}
    </div>
  );
};

export default TaskDueDate;

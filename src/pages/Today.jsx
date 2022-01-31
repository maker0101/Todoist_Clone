import Task from '../components/Task/Task';
import TaskAdd from '../components/Task/TaskAdd';
import useCrudTasks from '../hooks/useCrudTasks';
import { dateToDayMonth } from '../utilities/transform-dates';
import {
  filterTasksByDueDate,
  filterTasksOverdue,
} from '../utilities/filter-tasks';
import { sortTasksByDueDateAsc } from '../utilities/sort-tasks';

const Today = () => {
  const { tasks } = useCrudTasks();
  const today = new Date();
  const overdueTasks = sortTasksByDueDateAsc(filterTasksOverdue(tasks));
  const todayTasks = filterTasksByDueDate(tasks, today);

  return (
    <div className='content'>
      <h1 className='content__title'>Today</h1>

      <div className='content__section'>
        <h2 className='content__subTitle'>Overdue</h2>
        <hr />
        {overdueTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>

      <div className='content__section'>
        <h2 className='content__subTitle'>{`${dateToDayMonth(
          today
        )} · Today`}</h2>
        <hr />
        {todayTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
        <TaskAdd dueDate={today} />
      </div>
    </div>
  );
};

export default Today;
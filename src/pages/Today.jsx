import Page from './Page';
import Task from '../components/Task/Task';
import TaskAdd from '../components/Task/TaskAdd';
import useTasks from '../hooks/useTasks';
import { dateToDayMonth } from '../utilities/transform-dates';

const Today = () => {
  const { getTasks } = useTasks();
  const today = new Date();
  const dateAsDayMonth = dateToDayMonth(today);
  const overdueTasks = getTasks({ isOverdue: true });
  const todayTasks = getTasks({ isDueToday: true });

  return (
    <Page>
      <div className='content'>
        <h1 className='content__title' data-cy='content__title'>
          Today
        </h1>

        <div className='content__section'>
          <h2 className='content__subTitle' data-cy='content__subtitle'>
            Overdue
          </h2>
          <hr />
          {overdueTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>

        <div className='content__section'>
          <h2
            className='content__subTitle'
            data-cy='content__subtitle'>{`${dateAsDayMonth} · Today`}</h2>
          <hr />
          {todayTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
          <TaskAdd dueDate={today} />
        </div>
      </div>
    </Page>
  );
};

export default Today;

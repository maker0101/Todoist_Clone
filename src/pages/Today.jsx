import Page from '../components/Page';
import TaskAdd from '../components/Task/TaskAdd';
import ContentTitle from '../components/Content/ContentTitle';
import TasksList from '../components/Task/TasksList';
import ContentPlaceholder from '../components/Content/ContentPlaceholder';
import useTasks from '../hooks/useTasks';
import {
  dateToDayMonth,
  dateToYearMonthDay,
} from '../utilities/transform-dates';

const Today = () => {
  const { getTasks } = useTasks();
  const today = dateToYearMonthDay(new Date());
  const dateAsDayMonth = dateToDayMonth(today);
  const overdueTasks = getTasks({ isOverdue: true });
  const todayTasks = getTasks({ isDueToday: true });
  const hasTasks = overdueTasks.length > 0 || todayTasks.length > 0;

  return (
    <Page>
      <>
        <ContentTitle title={'Today'} />
        {hasTasks ? (
          <>
            <TasksList title='Overdue' tasks={overdueTasks}></TasksList>
            <TasksList title={`${dateAsDayMonth} · Today`} tasks={todayTasks} />
            <TaskAdd dueDate={today} />
          </>
        ) : (
          <>
            <TaskAdd dueDate={today} />
            <ContentPlaceholder page='today' dueDate={today} />
          </>
        )}
      </>
    </Page>
  );
};

export default Today;

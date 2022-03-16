import { Fragment, useState, useEffect } from 'react';
import Page from '../components/Page';
import TaskAdd from '../components/Task/TaskAdd';
import ContentTitle from '../components/Content/ContentTitle';
import TasksList from '../components/Task/TasksList';
import useTasks from '../hooks/useTasks';
import { calculateUpcomingDays } from '../utilities/calculate-upcoming-days.js';
import { sortTasksByDueDateAsc } from '../utilities/sort-tasks';
import { dateToYearMonthDay } from '../utilities/transform-dates';

const Upcoming = () => {
  const [upcomingDays, setUpcomingDays] = useState([]);
  const { getTasks } = useTasks();
  const overdueTasks = sortTasksByDueDateAsc(getTasks({ isOverdue: true }));
  const upcomingTasks = (day) =>
    getTasks({ isDueOnDate: dateToYearMonthDay(day?.date) });
  const daySubheading = ({ dateAsDayMonth, todayTomorrow, weekday }) =>
    `${dateAsDayMonth} · ${todayTomorrow || weekday}`;

  useEffect(() => setUpcomingDays(calculateUpcomingDays(7)), []);

  return (
    <Page>
      <>
        <ContentTitle title={'Upcoming'} />
        <TasksList title='Overdue' tasks={overdueTasks} />

        {upcomingDays.map((day) => (
          <Fragment key={day.id}>
            <TasksList title={daySubheading(day)} tasks={upcomingTasks(day)} />
            <TaskAdd dueDate={day.dateAsYearMonthDay} />
          </Fragment>
        ))}
      </>
    </Page>
  );
};

export default Upcoming;

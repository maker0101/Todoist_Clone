import { useState, useEffect } from 'react';
import Page from '../components/Page';
import Task from '../components/Task/Task';
import TaskAdd from '../components/Task/TaskAdd';
import useTasks from '../hooks/useTasks';
import { calculateUpcomingDays } from '../utilities/calculate-upcoming-days.js';
import { sortTasksByDueDateAsc } from '../utilities/sort-tasks';
import { dateToYearMonthDay } from '../utilities/transform-dates';

const Upcoming = () => {
  const [upcomingDays, setUpcomingDays] = useState([]);
  const { getTasks } = useTasks();
  const overdueTasks = sortTasksByDueDateAsc(getTasks({ isOverdue: true }));
  const daySubheading = ({ dateShort, todayTomorrow, weekday }) =>
    `${dateShort} · ${todayTomorrow || weekday}`;

  useEffect(() => setUpcomingDays(calculateUpcomingDays(7)), []);

  return (
    <Page>
      <div className='content'>
        <h1 className='content__title' data-cy='content__title'>
          Upcoming
        </h1>
        <div className='content__section'>
          <h2 className='content__subTitle'>Overdue</h2>
          <hr />
          {overdueTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>

        {upcomingDays.map((day) => (
          <div key={day.id} className='content__section'>
            <h2 className='content__subTitle'>{daySubheading(day)}</h2>
            <hr />
            {getTasks({ isDueOnDate: dateToYearMonthDay(day.date) }).map(
              (task) => (
                <Task key={task.id} task={task} />
              )
            )}
            <TaskAdd dueDate={day.date} />
          </div>
        ))}
      </div>
    </Page>
  );
};

export default Upcoming;

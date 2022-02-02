import { useState, useEffect } from 'react';
import Task from '../components/Task/Task';
import TaskAdd from '../components/Task/TaskAdd';
import useCrudTasks from '../hooks/useCrudTasks';
import { calculateUpcomingDays } from '../utilities/calculate-upcoming-days.js';
import {
  filterTasksByDueDate,
  filterTasksOverdue,
} from '../utilities/filter-tasks';
import { sortTasksByDueDateAsc } from '../utilities/sort-tasks';

const Upcoming = () => {
  const { tasks } = useCrudTasks();
  const [upcomingDays, setUpcomingDays] = useState([]);
  const overdueTasks = sortTasksByDueDateAsc(filterTasksOverdue(tasks));
  const daySubheading = ({ dateShort, todayTomorrow, weekday }) =>
    `${dateShort} · ${todayTomorrow ? todayTomorrow : weekday}`;

  useEffect(() => setUpcomingDays(calculateUpcomingDays(7)), []);

  return (
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
          {filterTasksByDueDate(tasks, new Date(day.date)).map((task) => (
            <Task key={task.id} task={task} />
          ))}
          <TaskAdd dueDate={day.date} />
        </div>
      ))}
    </div>
  );
};

export default Upcoming;

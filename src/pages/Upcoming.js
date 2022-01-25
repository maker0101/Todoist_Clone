import { useState, useEffect } from 'react';
import Task from '../components/Task';
import AddTask from '../components/AddTask';
import useCrudTasks from '../hooks/useCrudTasks';
import { dateToDayMonth } from '../utilities/transform-dates';
import { calculateUpcomingDays } from '../utilities/calculate-upcoming-days.js';
import {
	filterTasksByDueDate,
	filterTasksOverdue,
} from '../utilities/filter-tasks';
import { sortTasksByDueDateAsc } from '../utilities/sort-tasks';

export default function Upcoming() {
	const { tasks } = useCrudTasks();
	const [upcomingDays, setUpcomingDays] = useState([]);
	const overdueTasks = sortTasksByDueDateAsc(filterTasksOverdue(tasks));

	useEffect(() => setUpcomingDays(calculateUpcomingDays(7)), []);

	const daySubheading = (day) =>
		`${dateToDayMonth(new Date(day.date))} · ${
			day.todayTomorrow ? day.todayTomorrow : day.weekday
		}`;

	return (
		<div className="content">
			<h1 className="content__title">Upcoming</h1>
			<div className="content__section">
				<h2 className="content__subTitle">Overdue</h2>
				<hr />
				{overdueTasks.map((task) => (
					<Task key={task.id} task={task} />
				))}
			</div>

			{upcomingDays.map((day) => (
				<div key={day.id} className="content__section">
					<h2 className="content__subTitle">{daySubheading(day)}</h2>
					<hr />
					{filterTasksByDueDate(tasks, new Date(day.date)).map((task) => (
						<Task key={task.id} task={task} />
					))}
					<AddTask dueDate={day.date} />
				</div>
			))}
		</div>
	);
}

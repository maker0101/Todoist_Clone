import { useState, useEffect } from 'react';
import Task from '../components/Task';
import AddTask from '../components/AddTask';
import useFilterTasks from '../hooks/useFilterTasks';
import { dateToDayMonth } from '../utilities/transform-dates';
import { calculateUpcomingDays } from '../utilities/calculate-upcoming-days.js';

export default function Upcoming() {
	const [upcomingDays, setUpcomingDays] = useState([]);
	const { filterTasksOverdue, filterTasksByDueDate } = useFilterTasks();

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
				{filterTasksOverdue().map((task) => (
					<Task key={task.id} task={task} />
				))}
			</div>

			{upcomingDays.map((day) => (
				<div key={day.id} className="content__section">
					<h2 className="content__subTitle">{daySubheading(day)}</h2>
					<hr />
					{filterTasksByDueDate(new Date(day.date)).map((task) => (
						<Task key={task.id} task={task} />
					))}
					<AddTask dueDate={day.date} />
				</div>
			))}
		</div>
	);
}

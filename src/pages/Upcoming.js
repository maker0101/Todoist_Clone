import { useState, useEffect } from 'react';
import Task from '../components/Task';
import AddTask from '../components/AddTask';
import useFilterTasks from '../hooks/useFilterTasks';
import { shortenDate } from '../utilities/shortenDate';
import { calcUpcomingDays } from '../utilities/calcUpcomingDays';

export default function Upcoming() {
	const [upcomingDays, setUpcomingDays] = useState([]);
	const { filterTasksOverdue, filterTasksByDueDate } = useFilterTasks();

	useEffect(() => setUpcomingDays(calcUpcomingDays(7)), []);

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
					<h2 className="content__subTitle">{`${shortenDate(
						new Date(day.date)
					)} · ${day.todayTomorrow ? day.todayTomorrow : day.weekday}`}</h2>
					<hr />
					{filterTasksByDueDate(new Date(day.date)).map((task) => (
						<Task key={task.id} task={task} />
					))}
					<AddTask />
				</div>
			))}
		</div>
	);
}

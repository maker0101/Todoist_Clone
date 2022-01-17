import { useState, useEffect } from 'react';
import Task from '../components/Task';
import AddTask from '../components/AddTask';
import useTasks from '../hooks/useTasks';
import useDate from '../hooks/useDate';

export default function Upcoming(props) {
	const [upcomingDays, setUpcomingDays] = useState([]);
	const { isTaskOverdue, isTaskDue } = useTasks();
	const { shortenDate, calcUpcomingDays } = useDate();

	useEffect(() => setUpcomingDays(calcUpcomingDays(7)), []);

	return (
		<div className="content">
			<h1 className="content__title">Upcoming</h1>
			<div className="content__section">
				<h2 className="content__subTitle">Overdue</h2>
				<hr />
				{props.tasks.map(
					(task) => isTaskOverdue(task) && <Task key={task.id} task={task} />
				)}
			</div>

			{upcomingDays.map((day) => (
				<div key={day.id} className="content__section">
					<h2 className="content__subTitle">{`${shortenDate(
						new Date(day.date)
					)} · ${day.todayTomorrow ? day.todayTomorrow : day.weekday}`}</h2>
					<hr />
					{props.tasks.map(
						(task) =>
							isTaskDue(task, day.date) && <Task key={task.id} task={task} />
					)}
					<AddTask projects={props.projects} tasks={props.tasks} />
				</div>
			))}
		</div>
	);
}

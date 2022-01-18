import { useState, useEffect, useContext } from 'react';
import Task from '../components/Task';
import AddTask from '../components/AddTask';
import useTasks from '../hooks/useTasks';
import { shortenDate } from '../utilities/shortenDate';
import { calcUpcomingDays } from '../utilities/calcUpcomingDays';
import { TasksContext } from '../contexts/TasksContext';

export default function Upcoming() {
	const { tasks } = useContext(TasksContext);
	const [upcomingDays, setUpcomingDays] = useState([]);
	const { isTaskOverdue, isTaskDue } = useTasks();

	useEffect(() => setUpcomingDays(calcUpcomingDays(7)), []);

	return (
		<div className="content">
			<h1 className="content__title">Upcoming</h1>
			<div className="content__section">
				<h2 className="content__subTitle">Overdue</h2>
				<hr />
				{tasks
					.filter((task) => isTaskOverdue(task))
					.map((task) => (
						<Task key={task.id} task={task} />
					))}
			</div>

			{upcomingDays.map((day) => (
				<div key={day.id} className="content__section">
					<h2 className="content__subTitle">{`${shortenDate(
						new Date(day.date)
					)} · ${day.todayTomorrow ? day.todayTomorrow : day.weekday}`}</h2>
					<hr />
					{tasks
						.filter((task) => isTaskDue(task, day.date))
						.map((task) => (
							<Task key={task.id} task={task} />
						))}
					<AddTask />
				</div>
			))}
		</div>
	);
}

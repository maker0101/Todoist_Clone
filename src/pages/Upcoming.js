import React from 'react';
import Task from '../components/Task';
import TaskForm from '../components/TaskForm';
import useTasks from '../hooks/useTasks';
import useDate from '../hooks/useDate';

function Upcoming(props) {
	const [upcomingDays, setUpcomingDays] = React.useState([]);
	const { isTaskOverdue, isTaskDueOnDate } = useTasks();
	const { transformDueDate, calcUpcomingDays } = useDate();

	React.useEffect(() => setUpcomingDays(calcUpcomingDays(7)), []);

	return (
		<div className="content">
			<div className="content__container">
				<h1 className="content__containerTitle">Upcoming</h1>
				<div
					className="content__section"
					style={{ display: true ? 'grid' : 'none' }}
				>
					<h2 className="content__sectionTitle">Overdue</h2>
					<hr />

					<ul className="tasksList">
						{props.tasks.map(
							(task) =>
								isTaskOverdue(task) && <Task key={task.id} task={task} />
						)}
					</ul>
				</div>

				{upcomingDays.map((day) => (
					<div key={day.id} className="content__section">
						<h2 className="content__sectionTitle">{`${transformDueDate(
							new Date(day.date)
						)} · ${day.todayTomorrow ? day.todayTomorrow : day.weekday}`}</h2>
						<hr />
						<ul className="tasksList">
							{props.tasks.map(
								(task) =>
									isTaskDueOnDate(task, day.date) && (
										<Task key={task.id} task={task} />
									)
							)}
							<TaskForm projects={props.projects} />
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}

export default Upcoming;

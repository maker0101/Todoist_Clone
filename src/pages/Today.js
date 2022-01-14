import React from 'react';
import Task from '../components/Task';
import TaskForm from '../components/TaskForm';
import useTasks from '../hooks/useTasks';
import useDate from '../hooks/useDate';

function Today(props) {
	const { isTaskOverdue, isTaskDueOnDate } = useTasks();
	const { transformDueDate } = useDate();
	const today = new Date();

	return (
		<div className="content">
			<div className="content__container">
				<h1 className="content__containerTitle">Today</h1>

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

				<div className="content__section">
					<h2 className="content__sectionTitle">{`${transformDueDate(
						today
					)} · Today`}</h2>
					<hr />
					<ul className="tasksList">
						{props.tasks.map(
							(task) =>
							isTaskDueOnDate(task, today) && <Task key={task.id} task={task} />
						)}
						<TaskForm projects={props.projects} />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Today;

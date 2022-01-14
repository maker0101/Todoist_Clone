import React from 'react';
import Task from '../components/Task';
import TaskForm from '../components/TaskForm';
import useTasks from '../hooks/useTasks';
import useDate from '../hooks/useDate';

export default function Today(props) {
	const { isTaskOverdue, isTaskDue } = useTasks();
	const { shortenDate } = useDate();
	const today = new Date();

	return (
		<div className="content">
			<h1 className="content__title">Today</h1>

			<div className="content__section">
				<h2 className="content__subTitle">Overdue</h2>
				<hr />
				{props.tasks.map(
					(task) => isTaskOverdue(task) && <Task key={task.id} task={task} />
				)}
			</div>

			<div className="content__section">
				<h2 className="content__subTitle">{`${shortenDate(today)} · Today`}</h2>
				<hr />
				{props.tasks.map(
					(task) => isTaskDue(task, today) && <Task key={task.id} task={task} />
				)}
				<TaskForm projects={props.projects} tasks={props.tasks}/>
			</div>
		</div>
	);
}

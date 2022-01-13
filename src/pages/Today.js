import React from 'react';
import Task from '../components/Task';
import TaskForm from '../components/TaskForm';

function Today(props) {
	const today = new Date().toDateString()
	console.log(today)

	return (
		<div className="content">
			<div className="content__container">
				<h1 className="content__containerTitle">Today</h1>
				<ul className="tasksList">
					{props.tasks.map((task) => (
						<Task key={task.id} task={task} />
					))}
					<TaskForm projects={props.projects} />
				</ul>
			</div>
		</div>
	);
}

export default Today;

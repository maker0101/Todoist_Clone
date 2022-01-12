import React from 'react';
import TaskListItem from '../components/Task';
import TaskForm from '../components/TaskForm';

function Upcoming(props) {
	return (
		<div className="content">
			<div className="content__container">
				<h1 className="content__containerTitle">Upcoming</h1>
				<ul className="tasksList">
					{props.tasks.map((task) => (
						<TaskListItem key={task.id} task={task} />
					))}
					<TaskForm projects={props.projects} />
				</ul>
			</div>
		</div>
	);
}

export default Upcoming;

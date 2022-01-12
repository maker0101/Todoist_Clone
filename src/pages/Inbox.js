import React from 'react';
import TaskListItem from '../components/TaskListItem';
import TaskForm from '../components/TaskForm';

function Inbox(props) {
	return (
		<div className="content">
			<div className="content__container">
				<h1 className="content__containerTitle">Inbox</h1>
				<ul className="tasksList">
					{props.tasks
						.filter((task) => task.projectId === 'GtbY3fGVBVrTJmJH4IGd')
						.map((task) => (
							<TaskListItem key={task.id} task={task} />
						))}
					<TaskForm projects={props.projects} />
				</ul>
			</div>
		</div>
	);
}

export default Inbox;

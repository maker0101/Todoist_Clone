import React from 'react';
import Task from '../components/Task';
import TaskForm from '../components/TaskForm';

export default function Inbox(props) {
	return (
		<div className="content">
			<h1 className="content__title">Inbox</h1>
			{props.tasks
				.filter((task) => task.projectId === 'GtbY3fGVBVrTJmJH4IGd')
				.map((task) => (
					<Task key={task.id} task={task} />
				))}
			<TaskForm projects={props.projects} />
		</div>
	);
}

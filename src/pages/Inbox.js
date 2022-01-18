import { useContext } from 'react';
import Task from '../components/Task';
import AddTask from '../components/AddTask';
import { TasksContext } from '../contexts/TasksContext';

export default function Inbox() {
	const { tasks } = useContext(TasksContext);

	return (
		<div className="content">
			<h1 className="content__title">Inbox</h1>
			{tasks
				.filter((task) => task.projectId === 'GtbY3fGVBVrTJmJH4IGd')
				.map((task) => (
					<Task key={task.id} task={task} />
				))}
			<AddTask />
		</div>
	);
}

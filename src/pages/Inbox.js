import Task from '../components/Task';
import AddTask from '../components/AddTask';
import useTasks from '../hooks/useTasks';

export default function Inbox() {
	const { tasks } = useTasks();

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

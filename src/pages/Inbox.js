import Task from '../components/Task';
import AddTask from '../components/AddTask';
import useCrudTasks from '../hooks/useCrudTasks';
import { filterTasksByProjectId } from '../utilities/filter-tasks';

export default function Inbox() {
	const { tasks } = useCrudTasks();

	return (
		<div className="content">
			<h1 className="content__title">Inbox</h1>
			{filterTasksByProjectId(tasks, 'GtbY3fGVBVrTJmJH4IGd').map((task) => (
				<Task key={task.id} task={task} />
			))}
			<AddTask />
		</div>
	);
}

import Task from '../components/Task';
import AddTask from '../components/AddTask';
import filterTasks from '../utilities/filterTasks';
import { shortenDate } from '../utilities/shortenDate';

export default function Today() {
	const { filterTasksOverdue, filterTasksByDueDate } = filterTasks();
	const today = new Date();

	return (
		<div className="content">
			<h1 className="content__title">Today</h1>

			<div className="content__section">
				<h2 className="content__subTitle">Overdue</h2>
				<hr />
				{filterTasksOverdue().map((task) => (
					<Task key={task.id} task={task} />
				))}
			</div>

			<div className="content__section">
				<h2 className="content__subTitle">{`${shortenDate(today)} · Today`}</h2>
				<hr />
				{filterTasksByDueDate(today).map((task) => (
					<Task key={task.id} task={task} />
				))}
				<AddTask />
			</div>
		</div>
	);
}

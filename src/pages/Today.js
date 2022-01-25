import Task from '../components/Task';
import AddTask from '../components/AddTask';
import useCrudTasks from '../hooks/useCrudTasks';
import { dateToDayMonth } from '../utilities/transform-dates';
import {
	filterTasksByDueDate,
	filterTasksOverdue,
} from '../utilities/filter-tasks';

export default function Today() {
	const { tasks } = useCrudTasks();
	const today = new Date();

	return (
		<div className="content">
			<h1 className="content__title">Today</h1>

			<div className="content__section">
				<h2 className="content__subTitle">Overdue</h2>
				<hr />
				{filterTasksOverdue(tasks).map((task) => (
					<Task key={task.id} task={task} />
				))}
			</div>

			<div className="content__section">
				<h2 className="content__subTitle">{`${dateToDayMonth(
					today
				)} · Today`}</h2>
				<hr />
				{filterTasksByDueDate(tasks, today).map((task) => (
					<Task key={task.id} task={task} />
				))}
				<AddTask dueDate={today} />
			</div>
		</div>
	);
}

import Task from '../components/Task';
import AddTask from '../components/AddTask';
import useTasks from '../hooks/useTasks';
import { shortenDate } from '../utilities/shortenDate';

export default function Today(props) {
	const { isTaskOverdue, isTaskDue } = useTasks();
	const today = new Date();

	return (
		<div className="content">
			<h1 className="content__title">Today</h1>

			<div className="content__section">
				<h2 className="content__subTitle">Overdue</h2>
				<hr />
				{props.tasks
					.filter((task) => isTaskOverdue(task))
					.map((task) => (
						<Task key={task.id} task={task} />
					))}
			</div>

			<div className="content__section">
				<h2 className="content__subTitle">{`${shortenDate(today)} · Today`}</h2>
				<hr />
				{props.tasks
					.filter((task) => isTaskOverdue(task))
					.map((task) => (
						<Task key={task.id} task={task} />
					))}
				<AddTask projects={props.projects} tasks={props.tasks} />
			</div>
		</div>
	);
}

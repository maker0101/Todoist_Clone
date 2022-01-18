import { useContext } from 'react';
import Task from '../components/Task';
import AddTask from '../components/AddTask';
import useTasks from '../hooks/useTasks';
import { shortenDate } from '../utilities/shortenDate';
import { TasksContext } from '../contexts/TasksContext';

export default function Today() {
	const { tasks } = useContext(TasksContext);
	const { isTaskOverdue, isTaskDue } = useTasks();
	const today = new Date();

	return (
		<div className="content">
			<h1 className="content__title">Today</h1>

			<div className="content__section">
				<h2 className="content__subTitle">Overdue</h2>
				<hr />
				{tasks
					.filter((task) => isTaskOverdue(task))
					.map((task) => (
						<Task key={task.id} task={task} />
					))}
			</div>

			<div className="content__section">
				<h2 className="content__subTitle">{`${shortenDate(today)} · Today`}</h2>
				<hr />
				{tasks
					.filter((task) => isTaskDue(task, today))
					.map((task) => (
						<Task key={task.id} task={task} />
					))}
				<AddTask />
			</div>
		</div>
	);
}

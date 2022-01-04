import getTasks from '../hooks/getTasks';

export default function FirebaseTasks() {
	const tasks = getTasks();

	return (
		<ul className="tasks__list">
			{tasks.map((task) => (
				<li key={`${task.id}`}>
					<span>{task.name}</span>
				</li>
			))}
		</ul>
	);
}

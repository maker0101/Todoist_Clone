import getTasks from '../../hooks/getTasks';

export default function Content() {
	const tasks = getTasks();

	return (
		<div className="content">
			<h1>Task List</h1>
			<ul className="content__taskList">
				{tasks.map((task) => {
					return (
						<li key={`${task.id}`}>
							<span>{task.name}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

import Checkbox from "./Checkbox";

export default function Tasks() {
	const tasks = [];
	let projectName = '';

	return (
		<div className="tasks">
			<h2>{projectName}</h2>
			<ul className="tasks-list">
				{tasks.map((task) => {
					return (
						<li key={`${task.id}`}>
							<Checkbox id={task.id} />
							<span>{task.name}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

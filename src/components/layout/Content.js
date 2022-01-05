import getTasks from '../../hooks/getTasks';

export default function Content() {
	const tasks = getTasks();

	return (
		<div className="content">
			<div className="content__container">
				<h1 className="content__containerTitle">Task List</h1>
				<ul className="content__tasksList">
					{tasks.map((task) => {
						return (
							<div className="content__taskContainer">
								<li className="content__task" key={`${task.id}`}>
									<div className="content__checkboxContainer">
										<input type="checkbox" />
										<span className="checkmark"></span>
									</div>
									<span className="content__taskName">{task.name}</span>
								</li>
								<hr />
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

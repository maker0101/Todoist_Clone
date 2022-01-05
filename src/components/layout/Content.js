import getTasks from '../../hooks/getTasks';
import Checkbox from '../Checkbox';

export default function Content() {
	const tasks = getTasks();

	return (
		<div className="content">
			<div className="content__container">
				<h1 className="content__containerTitle">Task List</h1>
				<ul className="content__tasksList">
					{tasks.map((task) => {
						return (
							<div className="content__taskContainer" key={`${task.id}`}>
								<li className="content__task">
									<Checkbox />
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

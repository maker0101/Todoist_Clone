import React from 'react';
import Checkbox from '../Checkbox';
import AddTaskForm from '../AddTaskForm';
import getTasks from '../../hooks/getTasks';
import { VscTrash, VscEdit } from 'react-icons/vsc';

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
									<span className="content__taskIcons">
										<VscTrash />
										<VscEdit />
									</span>
								</li>
								<hr />
							</div>
						);
					})}
					<div>
						<AddTaskForm />
					</div>
				</ul>
			</div>
		</div>
	);
}

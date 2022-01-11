import { db } from '../firebase';
import { VscTrash, VscEdit } from 'react-icons/vsc';
import { BsCalendar4Event } from 'react-icons/bs';
import useTasks from '../hooks/useTasks';

export default function TaskListItem(props) {
	const { deleteTask, toggleIsChecked } = useTasks();

	const transformDueDate = (date) => {
		const options = { month: 'long', day: 'numeric' };

		return date.toLocaleDateString('de-DE', options);
	};

	return (
		<div className="content__taskContainer">
			<li className="content__task">
				<label className="checkbox__container">
					<input
						type="checkbox"
						checked={props.task.isChecked}
						onChange={() =>
							toggleIsChecked(db, props.task.id, props.task.isChecked)
						}
					></input>
					<span className="checkbox__checkmark"></span>
				</label>
				<span className="content__taskName">{props.task.name}</span>
				<span className="content__taskIcons">
					<VscTrash onClick={() => deleteTask(db, props.task.id)} />
					<VscEdit />
				</span>
				<span></span>
				<span
					className="content__taskDescription"
					style={{ display: props.task.description ? 'flex' : 'none' }}
				>
					{props.task.description}
				</span>
				<span></span>
				<span></span>
				<span
					className="content__taskDescription"
					style={{ display: props.task.description ? 'flex' : 'none' }}
				>
					{props.task.dueDate && (
						<div className="content__dueDate">
							<span className="content__dueDateIcon">
								<BsCalendar4Event />
							</span>
							<span>{transformDueDate(props.task.dueDate.toDate())}</span>
						</div>
					)}
				</span>
			</li>
			<hr />
		</div>
	);
}

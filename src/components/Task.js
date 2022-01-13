import { db } from '../firebase';
import { VscTrash, VscEdit } from 'react-icons/vsc';
import { BsCalendar4Event } from 'react-icons/bs';
import useTasks from '../hooks/useTasks';
import useDate from '../hooks/useDate';

export default function Task(props) {
	const { deleteTask, toggleIsChecked } = useTasks();
	const { transformDueDate } = useDate();
	const isDueDateDefined = Boolean(props.task.dueDate);
	const dueDateTimestampInMs = new Date(props.task.dueDate.seconds * 1000);

	return (
		<>
			<li className="task">
				<div className="task__line task__line1">
					<label className="checkbox">
						<input
							type="checkbox"
							checked={props.task.isChecked}
							onChange={() =>
								toggleIsChecked(db, props.task.id, props.task.isChecked)
							}
						></input>
						<span className="checkbox__checkmark"></span>
					</label>
					<div className="task__name">{props.task.name}</div>
					<div className="task__icons">
						<VscTrash onClick={() => deleteTask(db, props.task.id)} />
						<VscEdit />
					</div>
				</div>

				<div
					className="task__line task__line2"
					style={{ display: props.task.description ? 'grid' : 'none' }}
				>
					<div className="task__description">{props.task.description}</div>
				</div>

				<div
					className="task__line task__line3"
					style={{ display: props.task.dueDate ? 'grid' : 'none' }}
				>
					<div className="task__dueDateContainer">
						<span className="task__dueDateIcon">
							<BsCalendar4Event />
						</span>
						<span className="task__dueDate">
							{isDueDateDefined && transformDueDate(dueDateTimestampInMs)}
						</span>
					</div>
				</div>
			</li>
			<hr />
		</>
	);
}

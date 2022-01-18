import { db } from '../firebase';
import { VscTrash, VscEdit } from 'react-icons/vsc';
import { BsCalendar4Event } from 'react-icons/bs';
import useTasks from '../hooks/useTasks';
import { shortenDate } from '../utilities/shortenDate';

export default function Task({ task }) {
	const { deleteTask, toggleIsChecked } = useTasks();
	const isDueDateDefined = Boolean(task.dueDate);
	const dueDateTimestampInMs = new Date(task.dueDate.seconds * 1000);

	return (
		<>
			<div className="task">
				<div className="task__line">
					<label className="checkbox">
						<input
							type="checkbox"
							checked={task.isChecked}
							onChange={() => toggleIsChecked(db, task.id, task.isChecked)}
						></input>
						<span className="checkbox__checkmark"></span>
					</label>
					<div className="task__name">{task.name}</div>
					<div className="task__icons">
						<VscTrash onClick={() => deleteTask(db, task.id)} />
						<VscEdit />
					</div>
				</div>

				<div
					className="task__line"
					style={{ display: task.description ? 'grid' : 'none' }}
				>
					<div className="task__description">{task.description}</div>
				</div>

				<div
					className="task__line"
					style={{ display: task.dueDate ? 'grid' : 'none' }}
				>
					<div className="task__dueDateContainer">
						<span className="task__dueDateIcon">
							<BsCalendar4Event />
						</span>
						<span className="task__dueDate">
							{isDueDateDefined && shortenDate(dueDateTimestampInMs)}
						</span>
					</div>
				</div>
			</div>
			<hr />
		</>
	);
}

import Checkbox from './Checkbox';
import { VscTrash, VscEdit } from 'react-icons/vsc';
import { db } from '../firebase';
import { deleteDoc, doc } from 'firebase/firestore';

export default function TaskListItem({ name, id }) {
	function deleteTask(id) {
		deleteDoc(doc(db, 'tasks', id));
	}

	return (
		<div className="content__taskContainer">
			<li className="content__task">
				<Checkbox />
				<span className="content__taskName">{name}</span>
				<span className="content__taskIcons">
					<VscTrash onClick={() => deleteTask(id)} />
					<VscEdit />
				</span>
			</li>
			<hr />
		</div>
	);
}

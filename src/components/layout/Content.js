import React from 'react';
import {
	collection,
	query,
	doc,
	where,
	onSnapshot,
	addDoc,
	deleteDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import Checkbox from '../Checkbox';
import { VscTrash, VscEdit } from 'react-icons/vsc';

export default function Content() {
	const [tasks, setTasks] = React.useState([]);
	const [addTaskInput, setAddTaskInput] = React.useState('');

	// Questions and TODO:
	// 1.) How to extract these CRUD functions and store and (re-)use them all over the application?
	// Why difficult: There are references to the state inside the function, but also extracting the state
	// away into seperate files would break the references to the state inside the returned JSX.
	const createTask = async (e) => {
		e.preventDefault();

		await addDoc(collection(db, 'tasks'), {
			name: addTaskInput,
			projectId: '1',
			userId: 'userid1',
		});

		setAddTaskInput('');
	};

	React.useEffect(() => {
		const getTasks = async () => {
			const tasksQuery = query(
				collection(db, 'tasks'),
				where('userId', '==', 'userid1')
			);

			const unsubscribe = onSnapshot(tasksQuery, (querySnapshot) => {
				setTasks(
					querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
				);
			});
			return unsubscribe;
		};

		getTasks();
	}, []);

	const deleteTask = async (id) => {
		const taskDoc = doc(db, 'tasks', id);
		console.log(taskDoc);
		await deleteDoc(taskDoc);
	};

	return (
		<div className="content">
			<div className="content__container">
				<h1 className="content__containerTitle">Task List</h1>
				<ul className="content__tasksList">
					{tasks.map((task) => (
						<div className="content__taskContainer" key={task.id}>
							<li className="content__task">
								<Checkbox />
								<span className="content__taskName">{task.name}</span>
								<span className="content__taskIcons">
									<VscTrash onClick={() => deleteTask(task.id)} />
									<VscEdit />
								</span>
							</li>
							<hr />
						</div>
					))}
					<form>
						<input
							type="text"
							id="taskName"
							name="name"
							value={addTaskInput}
							onChange={(e) => setAddTaskInput(e.target.value)}
						/>
						<input type="submit" onClick={createTask} />
					</form>
				</ul>
			</div>
		</div>
	);
}

import React from 'react';
import {
	collection,
	query,
	doc,
	where,
	onSnapshot,
	addDoc,
	deleteDoc,
	updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import { VscTrash, VscEdit } from 'react-icons/vsc';

export default function Content() {
	const [tasks, setTasks] = React.useState([]);
	const [addTaskInput, setAddTaskInput] = React.useState('');

	const createTask = async (e) => {
		e.preventDefault();

		await addDoc(collection(db, 'tasks'), {
			name: addTaskInput,
			isChecked: false,
			projectId: '1',
			userId: 'userid1',
		});

		setAddTaskInput('');
	};

	React.useEffect(() => {
		const getTasks = async () => {
			const tasksQuery = query(
				collection(db, 'tasks'),
				where('userId', '==', 'userid1'),
				where('isChecked', '==', false)
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
		await deleteDoc(taskDoc);
	};

	const toggleIsChecked = async (id, checked) => {
		const taskDoc = doc(db, 'tasks', id);
		await updateDoc(taskDoc, { isChecked: !checked });
	};

	return (
		<div className="content">
			<div className="content__container">
				<h1 className="content__containerTitle">Task List</h1>
				<ul className="content__tasksList">
					{tasks.map((task) => (
						<div className="content__taskContainer" key={task.id}>
							<li className="content__task">
								<label className="checkbox__container">
									<input
										type="checkbox"
										checked={task.isChecked}
										onChange={() => toggleIsChecked(task.id, task.isChecked)}
									></input>
									<span className="checkbox__checkmark"></span>
								</label>
								<span className="content__taskName">{task.name}</span>
								<span className="content__taskIcons">
									<VscTrash onClick={() => deleteTask(task.id)} />
									<VscEdit />
								</span>
							</li>
							<hr />
						</div>
					))}
					<form className="addTaskForm">
						<div className="addTaskForm__inputContainer">
							<input
								className="input input__name"
								type="text"
								id="taskName"
								name="name"
								value={addTaskInput}
								placeholder="Task name"
								onChange={(e) => setAddTaskInput(e.target.value)}
							/>
							<textarea
								className="input input__description"
								type="text"
								id="taskDescription"
								name="description"
								value={addTaskInput}
								placeholder="Description"
								onChange={(e) => setAddTaskInput(e.target.value)}
							/>
						</div>
						<input
							className="button__primary"
							type="submit"
							value="Add Task"
							onClick={createTask}
						/>
					</form>
				</ul>
			</div>
		</div>
	);
}

import React from 'react';
import { useParams } from 'react-router-dom';
import {
	collection,
	query,
	doc,
	where,
	orderBy,
	onSnapshot,
	addDoc,
	deleteDoc,
	updateDoc,
	serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';
import { VscTrash, VscEdit } from 'react-icons/vsc';

function Project() {
	const [tasks, setTasks] = React.useState([]);
	const [taskNameInput, setTaskNameInput] = React.useState('');
	const [taskDescriptionInput, setTaskDescriptionInput] = React.useState('');

	const { projectId } = useParams();

	const createTask = async (e) => {
		try {
			e.preventDefault();

			await addDoc(collection(db, 'tasks'), {
				name: taskNameInput,
				description: taskDescriptionInput,
				isChecked: false,
				projectId: '1',
				userId: 'userid1',
				createdAt: serverTimestamp(),
			});

			setTaskNameInput('');
			setTaskDescriptionInput('');
		} catch (e) {
			console.log(e);
		}
	};

	const getTasks = () => {
		const tasksQuery = query(
			collection(db, 'tasks'),
			where('userId', '==', 'userid1'),
			where('projectId', '==', projectId),
			where('isChecked', '==', false),
			orderBy('createdAt')
		);

		onSnapshot(tasksQuery, (querySnapshot) => {
			setTasks(
				querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			);
		});
	};

	React.useEffect(() => getTasks(), [projectId]);

	const deleteTask = async (id) => {
		try {
			const taskDoc = doc(db, 'tasks', id);
			await deleteDoc(taskDoc);
		} catch (e) {
			console.log(e);
		}
	};

	const toggleIsChecked = async (id, checked) => {
		try {
			const taskDoc = doc(db, 'tasks', id);
			await updateDoc(taskDoc, { isChecked: !checked });
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="content">
			<div className="content__container">
				<h1 className="content__containerTitle">Tasks List</h1>
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
								<span></span>
								<span
									className="content__taskDescription"
									style={{ display: task.description ? 'flex' : 'none' }}
								>
									{task.description}
								</span>
							</li>
							<hr />
						</div>
					))}
					<form className="addTaskForm" onSubmit={createTask}>
						<div className="addTaskForm__inputContainer">
							<input
								className="input input__name"
								type="text"
								id="taskName"
								name="name"
								value={taskNameInput}
								placeholder="Task name"
								onChange={(e) => setTaskNameInput(e.target.value)}
							/>
							<textarea
								className="input input__description"
								type="text"
								id="taskDescription"
								name="description"
								value={taskDescriptionInput}
								placeholder="Description"
								onChange={(e) => setTaskDescriptionInput(e.target.value)}
							/>
						</div>
						<input className="button__primary" type="submit" value="Add Task" />
					</form>
				</ul>
			</div>
		</div>
	);
}

export default Project;

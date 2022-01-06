import React from 'react';
import AddTaskForm from '../AddTaskForm';
import {
	onSnapshot,
	collection,
	query,
	where,
	getDocs,
} from 'firebase/firestore';
import { db } from '../../firebase';
import TaskListItem from '../TaskListItem';

export default function Content() {
	const [tasks, setTasks] = React.useState([]);
	const [todos, setTodos] = React.useState([]);
	console.log(tasks);
	console.log(todos);

	React.useEffect(() => {
		getTasks();
	}, []);

	function getTasks() {
		const tasksQuery = query(
			collection(db, 'tasks'),
			where('userId', '==', 'userid1')
		);
		const unsubscribe = onSnapshot(tasksQuery, (querySnapshot) => {
			const tasksSnapshot = querySnapshot.docs.map((doc) => doc.data());
			setTasks(tasksSnapshot);
		});
		return unsubscribe;
	}

	React.useEffect(() => {
		const getTodos = async () => {
			const data = await getDocs(collection(db, 'tasks'));
			setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getTodos();
	}, []);

	return (
		<div className="content">
			<div className="content__container">
				<h1 className="content__containerTitle">Task List</h1>
				<ul className="content__tasksList">
					{tasks.map((task) => (
						<TaskListItem name={task.name} id={task.id} key={task.id} />
					))}
					<div>
						<AddTaskForm />
					</div>
				</ul>
			</div>
		</div>
	);
}

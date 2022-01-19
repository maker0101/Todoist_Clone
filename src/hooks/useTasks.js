import { useState, useEffect } from 'react';
import {
	collection,
	doc,
	query,
	where,
	orderBy,
	onSnapshot,
	addDoc,
	updateDoc,
	deleteDoc,
	serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';

export default function useTasks() {
	const [tasks, setTasks] = useState([]);

	const createTask = async (
		event,
		database,
		taskName,
		taskDescription,
		dueDate,
		projectId,
		userId
	) => {
		try {
			event.preventDefault();

			await addDoc(collection(database, 'tasks'), {
				name: taskName,
				description: taskDescription,
				dueDate: dueDate,
				projectId: projectId,
				userId: userId,
				createdAt: serverTimestamp(),
				isChecked: false,
			});
		} catch (err) {
			console.error(err);
		}
	};

	//TODO: Make projectId optional without relying on ternary operator and 'where('isChecked', '==', false),'
	const getTasks = (database, setTasksStateFn, projectId = false) => {
		const tasksQuery = query(
			collection(database, 'tasks'),
			where('userId', '==', 'userid1'),
			projectId
				? where('projectId', '==', projectId)
				: where('isChecked', '==', false),
			where('isChecked', '==', false),
			orderBy('createdAt')
		);

		onSnapshot(tasksQuery, (querySnapshot) => {
			setTasksStateFn(
				querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			);
		});
	};

	const deleteTask = async (database, taskId) => {
		try {
			const taskDoc = doc(database, 'tasks', taskId);
			await deleteDoc(taskDoc);
		} catch (err) {
			console.error(err);
		}
	};

	const toggleIsChecked = async (database, taskId, checked) => {
		try {
			const taskDoc = doc(database, 'tasks', taskId);
			await updateDoc(taskDoc, { isChecked: !checked });
		} catch (err) {
			console.error(err);
		}
	};

	const isTaskDue = (task, dateObject) => {
		const thisDay = dateObject.toDateString();
		const taskDueDate = task.dueDate
			? new Date(task.dueDate.seconds * 1000).toDateString()
			: '';
		return taskDueDate === thisDay;
	};

	const isTaskOverdue = (task) => {
		const today = new Date(new Date().toDateString());
		const taskDueDate = new Date(
			new Date(task.dueDate.seconds * 1000).toDateString()
		);

		return taskDueDate < today && Boolean(taskDueDate);
	};

	useEffect(() => getTasks(db, setTasks), []);

	return {
		tasks,
		createTask,
		deleteTask,
		toggleIsChecked,
		isTaskDue,
		isTaskOverdue,
	};
}

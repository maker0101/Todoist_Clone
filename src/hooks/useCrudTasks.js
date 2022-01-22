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

export default function useCrudTasks() {
	const [tasks, setTasks] = useState([]);

	const createTask = async (db, taskForm, userId) => {
		try {
			await addDoc(collection(db, 'tasks'), {
				name: taskForm.name,
				description: taskForm.description,
				dueDate: taskForm.dueDate,
				projectId: taskForm.projectId,
				userId: userId,
				createdAt: serverTimestamp(),
				isChecked: false,
			});
		} catch (err) {
			console.error(err);
		}
	};

	const updateTask = async (db, taskForm, userId) => {
		try {
			const taskDoc = doc(db, 'tasks', taskForm.id);
			await updateDoc(taskDoc, {
				name: taskForm.name,
				description: taskForm.description,
				dueDate: taskForm.dueDate,
				projectId: taskForm.projectId,
				userId: userId,
				isChecked: false,
			});
		} catch (err) {
			console.error(err);
		}
	};

	const toggleIsChecked = async (db, taskId, checked) => {
		try {
			const taskDoc = doc(db, 'tasks', taskId);
			await updateDoc(taskDoc, { isChecked: !checked });
		} catch (err) {
			console.error(err);
		}
	};

	const deleteTask = async (db, taskId) => {
		try {
			const taskDoc = doc(db, 'tasks', taskId);
			await deleteDoc(taskDoc);
		} catch (err) {
			console.error(err);
		}
	};

	//TODO: Make projectId optional without relying on ternary operator and 'where('isChecked', '==', false),'
	const getTasks = (db, projectId = false) => {
		const tasksQuery = query(
			collection(db, 'tasks'),
			where('userId', '==', 'userid1'),
			projectId
				? where('projectId', '==', projectId)
				: where('isChecked', '==', false),
			where('isChecked', '==', false),
			orderBy('createdAt')
		);

		onSnapshot(tasksQuery, (querySnapshot) => {
			setTasks(
				querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			);
		});
	};

	useEffect(() => getTasks(db), []);

	return {
		tasks,
		createTask,
		updateTask,
		toggleIsChecked,
		deleteTask,
	};
}

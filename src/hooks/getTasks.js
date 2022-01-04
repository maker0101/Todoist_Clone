import { onSnapshot, collection, query, where } from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase';

export default function getTasks() {
	const [tasks, setTasks] = React.useState([]);

	React.useEffect(() => {
		const tasksQuery = query(
			collection(db, 'tasks'),
			where('userId', '==', 'userid1')
		);
		const unsubscribe = onSnapshot(tasksQuery, (querySnapshot) => {
			const tasksSnapshot = querySnapshot.docs.map((doc) => doc.data());
			setTasks(tasksSnapshot);
		});
		return unsubscribe;
	}, []);

	return tasks;
}

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

export default function useTasks() {
	const createTask = async (
		event,
		database,
		taskName,
		taskDescription,
		dueDate,
		userId,
		projectId,
		setTaskFormFn
	) => {
		try {
			event.preventDefault();

			await addDoc(collection(database, 'tasks'), {
				name: taskName,
				description: taskDescription,
				dueDate: dueDate,
				userId: userId,
				projectId: projectId,
				createdAt: serverTimestamp(),
				isChecked: false,
			});

			setTaskFormFn({ name: '', description: '', dueDate: '' });
		} catch (event) {
			console.log(event);
		}
	};

	//TODO: Find more elegant solution in tertary where condition of firestore query to make projectId optional
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
		} catch (e) {
			console.log(e);
		}
	};

	const toggleIsChecked = async (database, taskId, checked) => {
		try {
			const taskDoc = doc(database, 'tasks', taskId);
			await updateDoc(taskDoc, { isChecked: !checked });
		} catch (e) {
			console.log(e);
		}
	};

	const filterTasksByProjectId = (tasks, projectId) =>
		tasks.filter((task) => task.projectId === projectId);

	const countTasksOfProject = (tasks, projectId) =>
		filterTasksByProjectId(tasks, projectId).length;

	return {
		getTasks,
		createTask,
		deleteTask,
		toggleIsChecked,
		filterTasksByProjectId,
		countTasksOfProject,
	};
}

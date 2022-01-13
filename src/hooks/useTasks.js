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
		} catch (event) {
			console.log(event);
		}
	};

	//TODO: Find more elegant solution in tertiary where condition of firestore query to make projectId optional
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

	const isTaskDueToday = (task) => {
		const today = new Date().toDateString();
		const taskDueDate = task.dueDate
			? new Date(task.dueDate.seconds * 1000).toDateString()
			: '';
		return taskDueDate === today;
	};

	const isTaskOverdue = (task) => {
		const today = new Date(new Date().toDateString());
		const taskDueDate = new Date(
			new Date(task.dueDate.seconds * 1000).toDateString()
		);

		return taskDueDate < today && Boolean(taskDueDate);
	};

	return {
		getTasks,
		createTask,
		deleteTask,
		toggleIsChecked,
		filterTasksByProjectId,
		countTasksOfProject,
		isTaskDueToday,
		isTaskOverdue,
	};
}

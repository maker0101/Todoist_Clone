import moment from 'moment';
import { firebaseApp } from '../firebase';
import { collatedTasksExist } from '../helpers/index';

export const useTasks = selectedProject => {
	const [tasks, setTasks] = React.useState([]);
	//const [archivedTasks, setArchivedTasks] = React.useState([]);

	React.useEffect(() => {
		let unsubscribe = firebaseApp
			.firestore()
			.collection('tasks')
			.where('userId', '==', 'userid1');

        
		unsubscribe =
			selectedProject && !collatedTasksExist(selectedProject)
				? (unsubscribe = unsubscribe.where('projecId', '==', selectedProject))
				: selectedProject === 'TODAY'
				? (unsubscribe = unsubscribe.where(
						'date',
						'==',
						moment().format('DD/MM/YYYY')
				  ))
				: selectedProject === 'INBOX' || selectedProject === 0
				? (unsubscribe = unsubscribe.where('date', '==', ''))
				: unsubscribe;

		unsubscribe = unsubscribe.onSnapshot((snapshot) => {
			const newTasks = snapshot.docs.map((task) => ({
				id: task.id,
				...task.data(),
			}));

			setTasks(
				selectedProject === 'UPCOMING'
					? newTasks.filter(
							(task) =>
								moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
								task.archived !== true
					  )
					: newTasks.filter((task) => task.archived !== true)
			);

			setArchivedTasks(newTasks.filter((task) => task.archived !== false));
		});

		return () => unsubscribe();
	}, [selectedProject]);

	return { tasks, archivedTasks };
}

// Code below would give all tasks  fror project with id 1
// const selectedProject = 1;
// const { tasks, archivedTasks } = useTasks;

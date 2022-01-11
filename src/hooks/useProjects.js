import { onSnapshot, collection, query, where } from 'firebase/firestore';

export default function useProjects() {
	const getProjects = (database, setProjectsStateFn) => {
		const projectsQuery = query(
			collection(database, 'projects'),
			where('userId', '==', 'userid1')
		);
		onSnapshot(projectsQuery, (querySnapshot) => {
			const projectsSnapshot = querySnapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setProjectsStateFn(projectsSnapshot);
		});
	};

	const getSelectedProject = async (projects, projectId, setSelectedProjectStateFn) => {
		const thisProject = await projects.find(
			(project) => project.id === projectId
		);
		setSelectedProjectStateFn(thisProject);
	};

	return { getProjects, getSelectedProject };
}

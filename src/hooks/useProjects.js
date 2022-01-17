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

	const getSelectedProject = async (projects, projectId) => {
		try {
			return await projects.find((project) => project.id === projectId);
		} catch (error) {
			console.log(error);
		}
	};

	return { getProjects, getSelectedProject };
}

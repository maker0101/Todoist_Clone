import { useState, useEffect } from 'react';
import { onSnapshot, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase';

export default function useProjects() {
	const [projects, setProjects] = useState([]);

	const findSelectedProject = (projects, projectId) =>
		projects.find((project) => project.id === projectId);

	const filterProjectsNoInbox = () =>
		projects.filter((project) => project.isInbox === false);

	const getProjects = (db) => {
		const projectsQuery = query(
			collection(db, 'projects'),
			where('userId', '==', 'userid1')
		);
		onSnapshot(projectsQuery, (querySnapshot) => {
			const projectsSnapshot = querySnapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setProjects(projectsSnapshot);
		});
	};

	useEffect(() => getProjects(db), []);

	return { projects, findSelectedProject, filterProjectsNoInbox };
}

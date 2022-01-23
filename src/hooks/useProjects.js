import { useState, useEffect, useContext } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { onSnapshot, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { SelectedProjectContext } from '../contexts/SelectedProjectContext';

export default function useProjects() {
	const [projects, setProjects] = useState([]);
	const { setSelectedProject } = useContext(SelectedProjectContext);
	const location = useLocation();
	const match = matchPath(
		{
			path: '/project/:id',
			exact: true,
			strict: true,
		},
		location.pathname
	);

	const filterProjectsNoInbox = () =>
		projects.filter((project) => project.isInbox === false);

	const getSelectedProject = () => {
		const findProjectById = (projects, projectId) =>
			projects.find((project) => project.id === projectId);

		const selectProjectId = match ? match.params.id : 'GtbY3fGVBVrTJmJH4IGd';
		const selectProject = findProjectById(projects, selectProjectId);
		setSelectedProject(selectProject ? selectProject : '');
	};

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
	useEffect(() => getSelectedProject(), [location, projects]);

	return { projects, filterProjectsNoInbox };
}

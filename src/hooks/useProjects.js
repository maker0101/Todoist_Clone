import { useState, useEffect, useContext } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import {
	onSnapshot,
	collection,
	query,
	where,
	addDoc,
	serverTimestamp,
} from 'firebase/firestore';
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

	const updateProject = (db, projectForm, userId) => {
		console.log('Udate project');
		console.log(projectForm);
	};

	const createProject = async (db, projectForm, userId) => {
		console.log(projectForm);
		try {
			await addDoc(collection(db, 'projects'), {
				name: projectForm.name,
				colorId: projectForm.colorId,
				isInbox: projectForm.isInbox,
				userId: userId,
				createdAt: serverTimestamp(),
			});
		} catch (err) {
			console.error(err);
		}
	};

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

	return { projects, updateProject, createProject, filterProjectsNoInbox };
}

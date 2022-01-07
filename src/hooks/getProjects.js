import { onSnapshot, collection, query, where } from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase';

export default function getProjects() {
	const [projects, setProjects] = React.useState([]);

	React.useEffect(() => {
		const projectsQuery = query(
			collection(db, 'projects'),
			where('userId', '==', 'userid1')
		);
		const unsubscribe = onSnapshot(projectsQuery, (querySnapshot) => {
			const projectsSnapshot = querySnapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setProjects(projectsSnapshot);
		});
		return unsubscribe;
	}, []);

	return projects;
}

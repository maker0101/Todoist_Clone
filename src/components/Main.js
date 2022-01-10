import React from 'react';
import { onSnapshot, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import Sidebar from './Sidebar';
import Content from './Content';

export default function Main(props) {
	const [projects, setProjects] = React.useState([]);

	React.useEffect(() => {
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
	}, []);

	return (
		<section className="main">
			<Sidebar
				sidebarIsHidden={props.sidebarIsHidden}
				projects={projects}
				setProjects={setProjects}
			/>
			<Content projects={projects} setProjects={setProjects} />
		</section>
	);
}

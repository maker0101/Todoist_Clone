import React from 'react';
import { db } from '../firebase';
import Sidebar from './Sidebar';
import Content from './Content';
import useProjects from '../hooks/useProjects';

export default function Main(props) {
	const [projects, setProjects] = React.useState([]);
	const { getProjects } = useProjects();

	React.useEffect(() => getProjects(db, setProjects), []);

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

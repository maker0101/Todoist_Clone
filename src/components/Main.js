import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

export default function Main(props) {
	return (
		<section className="main">
			<Sidebar
				sidebarIsHidden={props.sidebarIsHidden}
				tasks={props.tasks}
				projects={props.projects}
				setProjects={props.setProjects}
			/>
			<Content
				tasks={props.tasks}
				setTasks={props.setTasks}
				projects={props.projects}
				setProjects={props.setProjects}
			/>
		</section>
	);
}

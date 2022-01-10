import React from 'react';
import { Link } from 'react-router-dom';
import { VscCircleFilled } from 'react-icons/vsc';

export default function SidebarProjects(props) {
	const projects = props.projects;

	return (
		<ul className="sidebar__projectsList">
			{projects.map((project) => (
				<Link to={`/project/${project.id}`} key={project.id}>
					<li className="sidebar__grid sidebar__item sidebar__project">
						<span className="sidebar__icon sidebar__dot">
							<VscCircleFilled />
						</span>
						<span className="sidebar_projectName">{project.name}</span>
						<span className="sidebar__info">{projects.length}</span>
					</li>
				</Link>
			))}
		</ul>
	);
}

import React from 'react';
import { VscCircleFilled } from 'react-icons/vsc';
import useGetProjects from '../hooks/useGetProjects';

export default function SidebarProjects() {
	const projects = useGetProjects();

	return (
		<ul className="sidebar__projectsList">
			{projects.map((project) => (
				<li
					key={project.id}
					className="sidebar__grid sidebar__item sidebar__project"
				>
					<span className="sidebar__icon sidebar__dot">
						<VscCircleFilled />
					</span>
					<span className="sidebar_projectName">{project.name}</span>
					<span className="sidebar__info">{projects.length}</span>
				</li>
			))}
		</ul>
	);
}

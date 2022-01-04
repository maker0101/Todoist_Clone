import { VscCircleFilled } from 'react-icons/vsc';
import getProjects from '../hooks/getProjects';

export default function SidebarProjects() {
	const projects = getProjects();

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
					<span className="sidebar__info">23</span>
				</li>
			))}
		</ul>
	);
}

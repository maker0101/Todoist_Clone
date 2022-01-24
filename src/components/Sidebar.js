import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { VscCircleFilled } from 'react-icons/vsc';
import { SIDEBAR_NAV_DATA } from '../constants/sidebar-nav-data';
import useCrudTasks from '../hooks/useCrudTasks';
import useProjects from '../hooks/useProjects';
import useCountTasks from '../hooks/useCountTasks';

export default function Sidebar({ isSidebarHidden }) {
	const [isAccordionOpen, setIsAccordionOpen] = useState(true);
	const { tasks } = useCrudTasks();
	const { countTasksOfProject, countTasksOfNavItems } = useCountTasks();
	const { filterProjectsNoInbox } = useProjects();

	const toggleShowProjects = () => setIsAccordionOpen(() => !isAccordionOpen);

	return (
		<nav className={`sidebar ${isSidebarHidden ? 'sidebar__hidden' : ''}`}>
			<div className="sidebar__section">
				{SIDEBAR_NAV_DATA.map((item) => (
					<NavLink
						key={item.id}
						to={item.to}
						className="sidebar__item"
						activeclassname="selected">
						<div
							className={`sidebar__icon ${item.iconClassName}`}
							style={{ color: item.iconColor }}>
							{item.icon}
						</div>
						<div>{item.name}</div>
						<div className="sidebar__info">
							{countTasksOfNavItems(tasks, item)}
						</div>
					</NavLink>
				))}
			</div>

			<div className="sidebar__section">
				<div
					className="sidebar__item sidebar__sectionTitle"
					onClick={() => toggleShowProjects()}>
					<BsChevronDown
						className={`sidebar__icon sidebar__iconChevron ${
							!isAccordionOpen && 'sidebar__iconChevronNotShowing'
						}`}
					/>
					<h2>Projects</h2>
				</div>
				{isAccordionOpen &&
					filterProjectsNoInbox().map((project) => (
						<NavLink
							to={`/project/${project.id}`}
							key={project.id}
							className="sidebar__item"
							activeclassname="selected">
							<VscCircleFilled
								className="sidebar__icon"
								style={{ color: project.iconColor }}
							/>
							<div>{project.name}</div>
							<div className="sidebar__info">
								{countTasksOfProject(tasks, project.id)}
							</div>
						</NavLink>
					))}
			</div>
		</nav>
	);
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { VscCircleFilled } from 'react-icons/vsc';
import { sidebarNavData } from '../helper/sidebarNavData';
import useTasks from '../hooks/useTasks';

export default function Sidebar(props) {
	const { countTasksOfProject, countTasksOfNavItems } = useTasks();

	return (
		<nav
			className={`sidebar ${props.sidebarIsHidden ? 'sidebar__hidden' : ''}`}
		>
			<div className="sidebar__section">
				{sidebarNavData.map((item) => (
					<NavLink
						key={item.id}
						to={item.to}
						className="sidebar__item"
						activeclasscame="selected"
					>
						<div
							className={`sidebar__icon ${item.iconClassName}`}
							style={{ color: item.iconColor }}
						>
							{item.icon}
						</div>
						<div>{item.name}</div>
						<div className="sidebar__info">
							{countTasksOfNavItems(props.tasks, item)}
						</div>
					</NavLink>
				))}
			</div>

			<div className="sidebar__section">
				<div className="sidebar__item sidebar__sectionTitle">
					<BsChevronDown className="sidebar__icon sidebar__iconChevron" />
					<h2>Projects</h2>
				</div>
				{props.projects
					.filter((project) => project.isInbox === false)
					.map((project) => (
						<NavLink
							to={`/project/${project.id}`}
							key={project.id}
							className="sidebar__item"
							activeclassname="selected"
						>
							<VscCircleFilled
								className="sidebar__icon"
								style={{ color: project.iconColor }}
							/>
							<div>{project.name}</div>
							<div className="sidebar__info">
								{countTasksOfProject(props.tasks, project.id)}
							</div>
						</NavLink>
					))}
			</div>
		</nav>
	);
}

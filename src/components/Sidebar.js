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
			<div className="sidebar__section sidebar__nav">
				{sidebarNavData.map((item) => (
					<NavLink
						to={item.to}
						key={item.id}
						className="sidebar__sectionGrid sidebar__item"
						activeclasscame="selected"
					>
						<div className={`sidebar__icon ${item.iconClassName}`} style={{color: item.iconColor}}>
							{item.icon}
						</div>
						<div className="sidebar__text">{item.name}</div>
						<div className="sidebar__info">
							{countTasksOfNavItems(props.tasks, item)}
						</div>
					</NavLink>
				))}
			</div>

			<div className="sidebar__section sidebar__projects">
				<div className="sidebar__sectionGrid">
					<span className="sidebar__icon sidebar__iconChevron">
						<BsChevronDown />
					</span>
					<h2 className="sidebar__sectionTitle">Projects</h2>
				</div>
				<ul className="sidebar__projectsList">
					{props.projects
						.filter((project) => project.isInbox === false)
						.map((project) => (
							<NavLink
								to={`/project/${project.id}`}
								key={project.id}
								activeclassname="selected"
							>
								<li className="sidebar__sectionGrid sidebar__item sidebar__project">
									<span className="sidebar__icon sidebar__dot">
										<VscCircleFilled />
									</span>
									<span className="sidebar_projectName">{project.name}</span>
									<span className="sidebar__info">
										{countTasksOfProject(props.tasks, project.id)}
									</span>
								</li>
							</NavLink>
						))}
				</ul>
			</div>
		</nav>
	);
}

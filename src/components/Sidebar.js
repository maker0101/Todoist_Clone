import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { VscCircleFilled } from 'react-icons/vsc';
import { sidebarNavData } from '../helper/sidebarNavData';
import useTasks from '../hooks/useTasks';

export default function Sidebar(props) {
	const { countTasksOfProject } = useTasks();

	//TODO: replace 99 with actual calculations once base work is done
	const countTasksOfNavItem = (tasks, item) => {
		switch (item.name) {
			case 'Inbox':
				return countTasksOfProject(tasks, item.id);
			case 'Today':
				return 99;
			case 'Upcoming':
				return 99;
			default:
				break;
		}
	};

	return (
		<div className={`sidebar ${props.sidebarIsHidden && 'sidebar__hidden'}`}>
			<div className="sidebar__section sidebar__nav">
				<ul>
					{sidebarNavData.map((item) => (
						<Link to={item.to} key={item.id}>
							<li className="sidebar__grid sidebar__item">
								<span className={`sidebar__icon ${item.iconClassName}`}>
									{item.icon}
								</span>
								<span className="sidebar__text">{item.name}</span>
								<span className="sidebar__info">
									{countTasksOfNavItem(props.tasks, item)}
								</span>
							</li>
						</Link>
					))}
				</ul>
			</div>

			<div className="sidebar__section sidebar__projects">
				<div className="sidebar__grid">
					<span className="sidebar__icon sidebar__iconChevron">
						<BsChevronDown />
					</span>
					<h2 className="sidebar__sectionTitle">Projects</h2>
				</div>
				<ul className="sidebar__projectsList">
					{props.projects
						.filter((project) => project.isInbox === false)
						.map((project) => (
							<Link to={`/project/${project.id}`} key={project.id}>
								<li className="sidebar__grid sidebar__item sidebar__project">
									<span className="sidebar__icon sidebar__dot">
										<VscCircleFilled />
									</span>
									<span className="sidebar_projectName">{project.name}</span>
									<span className="sidebar__info">
										{countTasksOfProject(props.tasks, project.id)}
									</span>
								</li>
							</Link>
						))}
				</ul>
			</div>
		</div>
	);
}

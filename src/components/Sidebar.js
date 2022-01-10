import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { VscCircleFilled } from 'react-icons/vsc';
import { sidebarNavData } from './sidebarNavData';

export default function Sidebar(props) {
	const projects = props.projects;

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
								<span className="sidebar__info">5</span>
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
			</div>
		</div>
	);
}

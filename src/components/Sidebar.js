import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { VscCircleFilled, VscAdd, VscEdit } from 'react-icons/vsc';
import { SIDEBAR_NAV_DATA } from '../constants/sidebar-nav-data';
import useCrudTasks from '../hooks/useCrudTasks';
import useProjects from '../hooks/useProjects';
import useCountTasks from '../hooks/useCountTasks';
import useProjectModal from '../hooks/useProjectModal';
import { getColorHEXById } from '../utilities/get-color';
import { ProjectModalContext } from '../contexts/ProjectModalContext';

export default function Sidebar({ isSidebarHidden }) {
	const [isAccordionOpen, setIsAccordionOpen] = useState(true);
	const { tasks } = useCrudTasks();
	const { setIsProjectModalOpen } = useContext(ProjectModalContext);
	const { countTasksOfProject, countTasksOfNavItems } = useCountTasks();
	const { filterProjectsNoInbox } = useProjects();
	const { handleProjectModalOpen } = useProjectModal();

	const toggleAccordion = () => setIsAccordionOpen(() => !isAccordionOpen);

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
				<div className="sidebar__item sidebar__sectionTitle">
					<BsChevronDown
						className={`sidebar__icon sidebar__iconChevron ${
							!isAccordionOpen && 'sidebar__iconChevronNotShowing'
						}`}
						onClick={() => toggleAccordion()}
					/>
					<h2 onClick={() => toggleAccordion()}>Projects</h2>
					<VscAdd
						className="sidebar__addProject"
						onClick={() => handleProjectModalOpen(setIsProjectModalOpen)}
					/>
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
								style={{ color: getColorHEXById(project.colorId) }}
							/>
							<div>{project.name}</div>
							<div className="sidebar__info">
								{countTasksOfProject(tasks, project.id)}
							</div>
							<VscEdit
								className="sidebar__edit"
								onClick={() =>
									handleProjectModalOpen(setIsProjectModalOpen, project)
								}
							/>
						</NavLink>
					))}
			</div>
		</nav>
	);
}

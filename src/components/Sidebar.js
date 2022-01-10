import React from 'react';
import { VscInbox, VscCalendar, VscSymbolEvent } from 'react-icons/vsc';
import { IoTodayOutline } from 'react-icons/io5';
import SidebarNavItem from './SidebarNavItem';
import SidebarSectionTitle from './SidebarSectionTitle';
import SidebarProjects from './SidebarProjects';

export default function Sidebar(props) {
	return (
		<div className={`sidebar ${props.sidebarIsHidden && 'sidebar__hidden'}`}>
			<div className="sidebar__section sidebar__nav">
				<ul>
					<SidebarNavItem
						icon={<VscInbox />}
						iconClassName="sidebar__iconInbox"
						text="Inbox"
						count="5"
						to={'/inbox'}
					/>
					<SidebarNavItem
						icon={<IoTodayOutline />}
						iconClassName="sidebar__iconToday"
						text="Today"
						count="3"
						to={'/today'}
					/>
					<SidebarNavItem
						icon={<VscCalendar />}
						iconClassName="sidebar__iconUpcoming"
						text="Upcoming"
						count=""
						to={'/upcoming'}
					/>
				</ul>
			</div>

			<div className="sidebar__section sidebar__projects">
				<SidebarSectionTitle title="Projects" />
				<SidebarProjects
					projects={props.projects}
					setProjects={props.setProjects}
				/>
			</div>
		</div>
	);
}

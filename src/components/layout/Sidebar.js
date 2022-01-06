import { VscInbox, VscCalendar, VscSymbolEvent } from 'react-icons/vsc';
import SidebarNavItem from '../SidebarNavItem';
import SidebarSectionTitle from '../SidebarSectionTitle';
import SidebarProjects from '../SidebarProjects';
import AddProjectForm from '../AddProjectForm';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__section sidebar__nav">
				<ul>
					<SidebarNavItem
						icon={<VscInbox />}
						iconClassName="sidebar__iconInbox"
						text="Inbox"
						count="5"
					/>
					<SidebarNavItem
						icon={<VscSymbolEvent />}
						iconClassName="sidebar__iconToday"
						text="Today"
						count="3"
					/>
					<SidebarNavItem
						icon={<VscCalendar />}
						iconClassName="sidebar__iconUpcoming"
						text="Upcoming"
						count=""
					/>
				</ul>
			</div>

			<div className="sidebar__section sidebar__projects">
				<SidebarSectionTitle title="Projects" />
				<SidebarProjects />
				<AddProjectForm />
			</div>
		</div>
	);
}

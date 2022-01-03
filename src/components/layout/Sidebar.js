import { VscInbox, VscCalendar, VscSymbolEvent } from 'react-icons/vsc';
import { BsChevronDown } from 'react-icons/bs';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<ul className="sidebar__nav">
				<li className="sidebar__navItem sidebar__inbox">
					<span>
						<VscInbox />
					</span>
					<span>Inbox</span>
				</li>
				<li className="sidebar__navItem sidebar__today">
					<span>
						<VscSymbolEvent />
					</span>
					<span>Today</span>
				</li>
				<li className="sidebar__navItem sidebar__upcoming">
					<span>
						<VscCalendar />
					</span>
					<span>Upcoming</span>
				</li>
			</ul>

			<div className="sidebar__projects">
				<span>
					<BsChevronDown />
				</span>
				<h2>Projects</h2>
				<ul className="sidebar__projectsList">
					<li className="sidebar__project">Project 1</li>
					<li className="sidebar__project">Project 2</li>
				</ul>
				tbd: Add Projects Component here
			</div>
		</div>
	);
}

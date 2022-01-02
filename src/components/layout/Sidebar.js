import { VscInbox, VscCalendar, VscSymbolEvent } from 'react-icons/vsc'
import { BsChevronDown } from 'react-icons/bs'

export default function Sidebar() {
	return (
		<div className="sidebar">
			<ul className="sidebar-main">
				<li className="inbox">
					<span>
						<VscInbox />
					</span>
					<span>Inbox</span>
				</li>
				<li className="today">
					<span>
						<VscSymbolEvent />
					</span>
					<span>Today</span>
				</li>
				<li className="upcoming">
					<span>
						<VscCalendar  />
					</span>
					<span>Upcoming</span>
				</li>
			</ul>

			<div className="sidebar-projects">
				<span>
					<BsChevronDown />
				</span>
				<h2>Projects</h2>
				<ul className="sidebar-projects-list">
					<li className='project'>Project 1</li>
					<li className='project'>Project 2</li>
				</ul>
				tbd: Add Projects Component here
			</div>
		</div>
	);
}

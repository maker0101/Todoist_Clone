import {
	FaChevronDown,
	FaInbox,
	FaRegCalendar,
	FaRegCalendarAlt,
} from 'react-icons/fa';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<ul className="sidebar-main">
				<li>
					<span>
						<FaInbox />
					</span>
					<span>Inbox</span>
				</li>
				<li>
					<span>
						<FaRegCalendar />
					</span>
					<span>Today</span>
				</li>
				<li>
					<span>
						<FaRegCalendarAlt />
					</span>
					<span>Upcoming</span>
				</li>
			</ul>

			<div className="sidebar-projects">
				<span>
					<FaChevronDown />
				</span>
				<h2>Projects</h2>
				<ul className="sidebar-projects-list">Projects will be here</ul>
				Add Projects Component here
			</div>
		</div>
	);
}

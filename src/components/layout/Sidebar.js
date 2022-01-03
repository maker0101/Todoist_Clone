import {
	VscInbox,
	VscCalendar,
	VscSymbolEvent,
	VscCircleFilled,
} from 'react-icons/vsc';
import { BsChevronDown } from 'react-icons/bs';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__section sidebar__nav">
				<ul>
					<li className="sidebar__grid sidebar__item">
						<span className="sidebar__icon sidebar__iconInbox">
							<VscInbox />
						</span>
						<span className="sidebar__text">Inbox</span>
						<span className="sidebar__info">5</span>
					</li>
					<li className="sidebar__grid sidebar__item">
						<span className="sidebar__icon sidebar__iconToday">
							<VscSymbolEvent />
						</span>
						<span className="sidebar__text">Today</span>
						<span className="sidebar__info">3</span>
					</li>
					<li className="sidebar__grid sidebar__item">
						<span className="sidebar__icon sidebar__iconUpcoming">
							<VscCalendar />
						</span>
						<span className="sidebar__text">Upcoming</span>
						<span className="sidebar__info"></span>
					</li>
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
					<li className="sidebar__grid sidebar__item sidebar__project">
						<span className="sidebar__icon sidebar__dot">
							<VscCircleFilled />
						</span>
						<span className="sidebar_projectName">Project 1</span>
						<span className="sidebar__info">23</span>
					</li>
					<li className="sidebar__grid sidebar__item sidebar__project">
						<span className="sidebar__icon sidebar__dot">
							<VscCircleFilled />
						</span>
						<span className="sidebar_projectName">Project 2</span>
						<span className="sidebar__info">40</span>
					</li>
					<li className="sidebar__grid sidebar__item sidebar__project">
						<span className="sidebar__icon sidebar__dot">
							<VscCircleFilled />
						</span>
						<span className="sidebar_projectName">Project 3</span>
						<span className="sidebar__info">2</span>
					</li>
				</ul>
				<div className="sidebar__grid sidebar__item">
					<span></span>
					<span className="sidebar__text">+Add Project</span>
					<span></span>
				</div>
			</div>
		</div>
	);
}

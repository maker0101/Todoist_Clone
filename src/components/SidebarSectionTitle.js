import { BsChevronDown } from 'react-icons/bs';

export default function SidebarSectionTitle(props) {
	return (
		<div className="sidebar__grid">
			<span className="sidebar__icon sidebar__iconChevron">
				<BsChevronDown />
			</span>
			<h2 className="sidebar__sectionTitle">{props.title}</h2>
		</div>
	);
}

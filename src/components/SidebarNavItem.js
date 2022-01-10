import { Link } from 'react-router-dom';

export default function SidebarNavItem(props) {
	return (
		<Link to={props.to}>
			<li className="sidebar__grid sidebar__item">
				<span className={`sidebar__icon ${props.iconClassName}`}>
					{props.icon}
				</span>
				<span className="sidebar__text">{props.text}</span>
				<span className="sidebar__info">{props.count}</span>
			</li>
		</Link>
		
	);
}

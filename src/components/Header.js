import { Link } from 'react-router-dom';
import { VscMenu, VscHome, VscAdd, VscAccount, VscBell } from 'react-icons/vsc';
import { IoSearchOutline } from 'react-icons/io5';

export default function Header(props) {
	const toggleSidebarIsHidden = () =>
		props.setSidebarIsHidden(!props.sidebarIsHidden);

	return (
		<header className="header">
			<nav className="header__nav">
				<div className="header__navLeft">
					<ul className="header__navLeftList">
						<li
							className="header__item header__itemMenu"
							onClick={() => toggleSidebarIsHidden()}
						>
							<VscMenu />
						</li>
						<Link to="/today">
							<li className="header__item header__itemHome">
								<VscHome />
							</li>
						</Link>
						<li className="header__item header__itemSearch">
							<span className="header__searchIcon">
								<IoSearchOutline />
							</span>
							<span className="header__searchText">Search</span>
						</li>
					</ul>
				</div>
				<div className="header__navRight">
					<ul className="header__navRightList">
						<li className="header__item header__itemAdd">
							<VscAdd />
						</li>
						<li className="header__item header__itemNotifications">
							<VscBell />
						</li>
						<li className="header__item header__itemProfile">
							<VscAccount />
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

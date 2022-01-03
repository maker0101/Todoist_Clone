import {
	VscMenu,
	VscHome,
	VscSearch,
	VscAdd,
	VscAccount,
	VscBell,
} from 'react-icons/vsc';
import { IoSearchOutline } from 'react-icons/io5'

export default function Header() {
	return (
		<header className="header">
			<nav className="header__nav">
				<div className="header__navLeft">
					<ul className="header__navLeftList">
						<li className="header__item header__itemMenu">
							<VscMenu />
						</li>
						<li className="header__item header__itemHome">
							<VscHome />
						</li>
						<li className="header__item header__itemSearch">
							<span className='header__searchIcon'><IoSearchOutline /></span>
							<span className='header__searchText'>Search</span>
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

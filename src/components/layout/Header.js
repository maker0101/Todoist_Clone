import { SiTodoist } from 'react-icons/si';
import { VscAdd, VscAccount, VscBell, VscQuestion } from 'react-icons/vsc';

export default function Header() {
	return (
		<header className="header">
			<nav className="header__nav">
				<div className="header__logo">
					<SiTodoist />
				</div>
				<div className="header__settings">
					<ul className='header__settingsList'>
						<li className="header__settingsItem header_settingsItemAdd">
							<VscAdd />
						</li>
						<li className="header__settingsItem header_settingsItemNotifications">
							<VscBell />
						</li>
						<li className="header__settingsItem header_settingsItemProfile">
							<VscAccount />
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

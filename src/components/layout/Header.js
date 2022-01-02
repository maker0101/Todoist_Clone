import { SiTodoist } from 'react-icons/si';
import { VscAdd, VscAccount, VscBell, VscQuestion } from 'react-icons/vsc';

export default function Header() {
	return (
		<header className="header">
			<nav>
				<div className="logo">
					<SiTodoist />
				</div>
				<div className="settings">
					<ul>
						<li className="setting-add">
							<VscAdd />
						</li>
						<li>
							<VscQuestion />
						</li>
						<li>
							<VscBell />
						</li>
						<li>
							<VscAccount />
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

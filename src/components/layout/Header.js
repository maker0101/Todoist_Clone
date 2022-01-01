import { SiTodoist } from 'react-icons/si';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
	return (
		<header className="header" data-testid="header">
			<nav>
				<div className="logo">
					<SiTodoist />
				</div>
				<div className="settings">
					<ul>
						<li>+</li>
						<li>
							<FaMoon />
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

import { Link } from 'react-router-dom';
import { VscMenu, VscHome, VscAdd, VscAccount, VscBell } from 'react-icons/vsc';
import { IoSearchOutline } from 'react-icons/io5';
import useTaskModal from '../hooks/useTaskModal';

export default function Header({ isSidebarHidden, setIsSidebarHidden }) {
	const { openTaskModal } = useTaskModal();

	return (
		<header className="header">
			<div className="header__left">
				<VscMenu
					className="header__item"
					onClick={() => setIsSidebarHidden(() => !isSidebarHidden)}
				/>
				<Link to="/today">
					<VscHome className="header__item" />
				</Link>
				<div className="header__item header__itemSearch">
					<IoSearchOutline className="header__searchIcon" />
					<span className="header__searchText">Search</span>
				</div>
			</div>
			<div className="header__right">
				<VscAdd className="header__item" onClick={() => openTaskModal()} />
				<VscBell className="header__item" />
				<VscAccount className="header__item" />
			</div>
		</header>
	);
}

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  VscMenu,
  VscHome,
  VscAdd,
  VscAccount,
  VscBell,
  VscChromeClose,
} from 'react-icons/vsc';
import useTaskModal from '../hooks/useTaskModal';
import Search from './Search';
import useMediaQuery from '../hooks/useMediaQuery';
import { SidebarContext } from '../contexts/SidebarContext';

const Header = () => {
  const { handleTaskModalOpen } = useTaskModal();
  const { isDesktop } = useMediaQuery();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  const isCloseVisible = !isDesktop && isSidebarOpen;

  return (
    <header className='header'>
      <div className='header__left'>
        {isCloseVisible ? (
          <VscChromeClose
            className='header__item'
            onClick={() => setIsSidebarOpen(() => !isSidebarOpen)}
          />
        ) : (
          <VscMenu
            className='header__item'
            onClick={() => setIsSidebarOpen(() => !isSidebarOpen)}
          />
        )}
        <Link to='/today'>
          <VscHome className='header__item' />
        </Link>
        <Search />
      </div>
      <div className='header__right'>
        <VscAdd className='header__item' onClick={handleTaskModalOpen} />
        <VscBell className='header__item' />
        <VscAccount className='header__item' />
      </div>
    </header>
  );
};

export default Header;

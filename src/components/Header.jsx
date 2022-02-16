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
import { EMPTY_TASK } from '../constants/empty-task';

const Header = () => {
  const { handleTaskModalOpen } = useTaskModal();
  const { isDesktop } = useMediaQuery();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  const isCloseVisible = !isDesktop && isSidebarOpen;

  return (
    <header className='header' data-cy='header'>
      <div className='header__left'>
        {isCloseVisible ? (
          <VscChromeClose
            className='header__item'
            data-cy='header__item'
            onClick={() => setIsSidebarOpen(() => !isSidebarOpen)}
          />
        ) : (
          <VscMenu
            className='header__item'
            data-cy='header__item'
            onClick={() => setIsSidebarOpen(() => !isSidebarOpen)}
          />
        )}
        <Link to='/today'>
          <VscHome className='header__item' data-cy='header__item' />
        </Link>
        <Search />
      </div>
      <div className='header__right'>
        <VscAdd
          className='header__item'
          data-cy='header__item'
          id='header__addTask'
          onClick={() => handleTaskModalOpen(EMPTY_TASK)}
        />
        <VscBell
          title='Not implemented'
          className='header__item header__disabled'
          data-cy='header__item'
        />
        <VscAccount
          title='Not implemented'
          className='header__item header__disabled'
          data-cy='header__item'
        />
      </div>
    </header>
  );
};

export default Header;

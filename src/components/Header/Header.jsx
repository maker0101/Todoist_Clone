import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  VscMenu,
  VscHome,
  VscAdd,
  VscAccount,
  VscBell,
  VscChromeClose,
} from 'react-icons/vsc';
import useTaskModal from '../../hooks/useTaskModal';
import Search from './Search';
import AccountPopup from './AccountPopup';
import useMediaQuery from '../../hooks/useMediaQuery';
import { SidebarContext } from '../../contexts/SidebarContext';
import { EMPTY_TASK } from '../../constants/empty-task';

const Header = () => {
  const { handleTaskModalOpen } = useTaskModal();
  const { isDesktop } = useMediaQuery();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const [isAccountPopupOpen, setIsAccountPopupOpen] = useState(false);

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
            title='Toggle menu'
            className='header__item'
            data-cy='header__item'
            onClick={() => setIsSidebarOpen(() => !isSidebarOpen)}
          />
        )}
        <Link to='/today'>
          <VscHome
            title='Go to home'
            className='header__item'
            data-cy='header__item'
          />
        </Link>
        <Search />
      </div>
      <div className='header__right'>
        <VscAdd
          title='Quick Add'
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
          title='Account'
          onClick={() => setIsAccountPopupOpen(!isAccountPopupOpen)}
          className='header__item'
          data-cy='header__accountIcon'
        />
        {isAccountPopupOpen && <AccountPopup />}
      </div>
    </header>
  );
};

export default Header;

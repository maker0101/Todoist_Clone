import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SIDEBAR_NAV_DATA } from '../../constants/sidebar-nav-data';
import { countTasksOfNavItems } from '../../utilities/count-tasks';
import useTasks from '../../hooks/useTasks';
import useMediaQuery from '../../hooks/useMediaQuery';
import { SidebarContext } from '../../contexts/SidebarContext';

const SidebarNav = () => {
  const { tasks } = useTasks();
  const { isDesktop } = useMediaQuery();
  const { setIsSidebarOpen } = useContext(SidebarContext);

  return (
    <div className='sidebar__section'>
      {SIDEBAR_NAV_DATA.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          className='sidebar__item sidebar__navItem'
          onClick={() => !isDesktop && setIsSidebarOpen(false)}>
          <div
            className={`sidebar__icon ${item.iconClassName}`}
            style={{ color: item.iconColor }}>
            {item.icon}
          </div>
          <div>{item.name}</div>
          <div className='sidebar__info'>
            {countTasksOfNavItems(tasks, item)}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarNav;

import { NavLink } from 'react-router-dom';
import { SIDEBAR_NAV_DATA } from '../constants/sidebar-nav-data';
import useCrudTasks from '../hooks/useCrudTasks';
import useCountTasks from '../hooks/useCountTasks';

const SidebarNav = () => {
  const { tasks } = useCrudTasks();
  const { countTasksOfNavItems } = useCountTasks();

  return (
    <div className='sidebar__section'>
      {SIDEBAR_NAV_DATA.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          className='sidebar__item sidebar__navItem'
          activeclassname='selected'>
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

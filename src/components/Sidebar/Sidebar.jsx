import { useContext } from 'react';
import SidebarNav from './SidebarNav';
import SidebarProjects from './SidebarProjects';
import { SidebarContext } from '../../contexts/SidebarContext';

const Sidebar = () => {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <nav
      className={`sidebar ${isSidebarOpen && 'sidebar__mobile'}`}
      data-cy='sidebar'>
      <SidebarNav />
      <SidebarProjects />
    </nav>
  );
};

export default Sidebar;

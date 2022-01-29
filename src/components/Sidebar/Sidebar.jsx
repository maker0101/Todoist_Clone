import SidebarNav from './SidebarNav';
import SidebarProjects from './SidebarProjects';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <nav className={`sidebar ${isSidebarOpen && 'sidebar__mobile'}`}>
      <SidebarNav />
      <SidebarProjects />
    </nav>
  );
};

export default Sidebar;

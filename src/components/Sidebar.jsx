import SidebarNav from './SidebarNav';
import SidebarProjects from './SidebarProjects';

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <SidebarNav />
      <SidebarProjects />
    </nav>
  );
};

export default Sidebar;

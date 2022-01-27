import SidebarSectionNav from './SidebarSectionNav';
import SidebarSectionProjects from './SidebarSectionProjects';

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <SidebarSectionNav />
      <SidebarSectionProjects />
    </nav>
  );
};

export default Sidebar;

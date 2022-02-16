import Header from './Header';
import SidebarContainer from './Sidebar/SidebarContainer';
import Modals from './Modals/Modals';

const Page = ({ children }) => {
  return (
    <div className='page'>
      <Header />
      <SidebarContainer />
      <div className='content'>{children}</div>
      <Modals />
    </div>
  );
};

export default Page;

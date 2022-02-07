import Header from './Header';
import SidebarContainer from './Sidebar/SidebarContainer';
import Modals from './Modals/Modals';

const Page = ({ children }) => {
  return (
    <div className='page'>
      <Header />
      <SidebarContainer />
      {children}
      <Modals />
    </div>
  );
};

export default Page;

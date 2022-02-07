import Header from '../components/Header';
import SidebarContainer from '../components/Sidebar/SidebarContainer';
import Modals from '../components/Modals/Modals';

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

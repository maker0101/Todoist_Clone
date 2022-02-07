import { useContext } from 'react';
import Sidebar from './Sidebar';
import { SidebarContext } from '../../contexts/SidebarContext';

const SidebarContainer = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  return (
    <>
      {isSidebarOpen && (
        <>
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <div
            className='sidebar__bgOverlay'
            onClick={() => setIsSidebarOpen(false)}></div>
        </>
      )}
    </>
  );
};

export default SidebarContainer;

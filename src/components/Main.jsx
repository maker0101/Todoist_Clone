import { Routes, Route, Navigate } from 'react-router-dom';
import SidebarContainer from './Sidebar/SidebarContainer';
import Auth from '../pages/Auth';
import Inbox from '../pages/Inbox';
import Today from '../pages/Today';
import Upcoming from '../pages/Upcoming';
import Project from '../pages/Project';
import Modals from './Modals/Modals';

const Main = () => {
  return (
    <div className='main' data-cy='main'>
      <SidebarContainer />
      <Routes>
        <Route path='/' element={<Navigate to='/today' />} />
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/inbox' element={<Inbox />}></Route>
        <Route path='/today' element={<Today />}></Route>
        <Route path='/upcoming' element={<Upcoming />}></Route>
        <Route path='/project/:projectId' element={<Project />}></Route>
        {/*<Route path='*' element={<Navigate to='/' />} />*/}
      </Routes>
      <Modals />
    </div>
  );
};

export default Main;

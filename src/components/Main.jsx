import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from '../pages/Auth';
import Inbox from '../pages/Inbox';
import Today from '../pages/Today';
import Upcoming from '../pages/Upcoming';
import Project from '../pages/Project';

const Main = () => {
  return (
    <div className='main' data-cy='main'>
      <Routes>
        <Route path='/' element={<Navigate to='/today' />} />
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/inbox' element={<Inbox />}></Route>
        <Route path='/today' element={<Today />}></Route>
        <Route path='/upcoming' element={<Upcoming />}></Route>
        <Route path='/project/:projectId' element={<Project />}></Route>
        {/*<Route path='*' element={<Navigate to='/' />} />*/}
      </Routes>
    </div>
  );
};

export default Main;

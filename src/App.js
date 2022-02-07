import { Routes, Route, Navigate } from 'react-router-dom';
import Contexts from './components/Contexts';
import Auth from './pages/Auth';
import SignIn from './pages/SignIn';
import Inbox from './pages/Inbox';
import Today from './pages/Today';
import Upcoming from './pages/Upcoming';
import Project from './pages/Project';
import ProtectedRoutes from './components/ProtectedRoutes';

const App = () => {
  return (
    <div className='App'>
      <Contexts>
        <Routes>
          <Route path='/' element={<Navigate to='/today' />} />
          <Route path='/auth' element={<Auth />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path='/inbox' element={<Inbox />}></Route>
            <Route path='/today' element={<Today />}></Route>
            <Route path='/upcoming' element={<Upcoming />}></Route>
            <Route path='/project/:projectId' element={<Project />}></Route>
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        </Routes>
      </Contexts>
    </div>
  );
};

export default App;

import { Routes, Route, Navigate } from 'react-router-dom';
import Contexts from './components/Contexts';
import Auth from './pages/Auth';
import Inbox from './pages/Inbox';
import Today from './pages/Today';
import Upcoming from './pages/Upcoming';
import Project from './pages/Project';

const App = () => {
  return (
    <div className='App'>
      <Contexts>
        <Routes>
          <Route path='/' element={<Navigate to='/today' />} />
          <Route path='/auth' element={<Auth />}></Route>
          <Route path='/inbox' element={<Inbox />}></Route>
          <Route path='/today' element={<Today />}></Route>
          <Route path='/upcoming' element={<Upcoming />}></Route>
          <Route path='/project/:projectId' element={<Project />}></Route>
          {/*<Route path='*' element={<Navigate to='/' />} />*/}
        </Routes>
      </Contexts>
    </div>
  );
};

export default App;

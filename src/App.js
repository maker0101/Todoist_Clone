import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Contexts from './components/Contexts';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Inbox from './pages/Inbox';
import Today from './pages/Today';
import Upcoming from './pages/Upcoming';
import Project from './pages/Project';
import ProtectedRoutes from './components/ProtectedRoutes';

const App = () => {
  return (
    <div className='App'>
      <Contexts>
        <Router>
          <Routes>
            <Route path='/' element={<Navigate to='/today' />} />
            <Route path='/signin' element={<SignIn />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route element={<ProtectedRoutes />}>
              <Route path='/inbox' element={<Inbox />}></Route>
              <Route path='/today' element={<Today />}></Route>
              <Route path='/upcoming' element={<Upcoming />}></Route>
              <Route path='/project/:projectId' element={<Project />}></Route>
              <Route path='*' element={<Navigate to='/' />} />
            </Route>
          </Routes>
        </Router>
      </Contexts>
    </div>
  );
};

export default App;

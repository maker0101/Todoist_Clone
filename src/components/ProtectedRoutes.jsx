import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const useAuth = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return !!user?.email;
  //const user = { loggedIn: true };
  //return user?.loggedIn;
};

function ProtectedRoutes() {
  const isAuth = useAuth();
  console.log(isAuth);
  return isAuth ? <Outlet /> : <Navigate to='/auth' />;
}

export default ProtectedRoutes;

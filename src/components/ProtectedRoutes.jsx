import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

function ProtectedRoutes() {
  const { user } = useContext(UserContext);

  const isAuth = !!user?.accessToken;
  return isAuth ? <Outlet /> : <Navigate to='/signin' />;
}

export default ProtectedRoutes;

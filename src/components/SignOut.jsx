import { useContext } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { UserContext } from '../contexts/UserContext';

const SignOut = () => {
  const { user, setUser } = useContext(UserContext);

  const signout = () => signOut(auth);
  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return (
    <div className='signout'>
      {user?.email || 'Guest'}
      <br />
      <button onClick={signout}>Logout</button>
    </div>
  );
};

export default SignOut;

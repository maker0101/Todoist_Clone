import { useContext } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { UserContext } from '../contexts/UserContext';

const SignOut = () => {
  const { user, setUser } = useContext(UserContext);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const signout = async () => {
    await signOut(auth);
  };

  return (
    <div className='signout'>
      {user?.email}
      <button onClick={signout}>Logout</button>
    </div>
  );
};

export default SignOut;

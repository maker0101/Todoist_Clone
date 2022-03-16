import { useContext } from 'react';
import { VscSignOut, VscAccount } from 'react-icons/vsc';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { UserContext } from '../../contexts/UserContext';

const AccountPopup = () => {
  const { user, setUser } = useContext(UserContext);

  const signout = () => signOut(auth);
  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return (
    <div className='account'>
      <div className='account_row account_userInfo'>
        <VscAccount />
        {user?.email || 'Guest'}
      </div>
      <hr />
      <div onClick={signout} className='account_row account_logout'>
        <VscSignOut />
        <p data-cy='logout'>Log out</p>
      </div>
    </div>
  );
};

export default AccountPopup;

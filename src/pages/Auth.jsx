import { useState, useContext } from 'react';
import { SiTodoist } from 'react-icons/si';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase-config';
import { UserContext } from '../contexts/UserContext';

// TODO: needs to be cleaned and wired into to App (put in custom hook)
const Auth = () => {
  const { user, setUser } = useContext(UserContext);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  console.log(user?.email);

  const register = async () => {
    try {
      const userRegistered = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(userRegistered);
    } catch (error) {
      console.error(error);
    }
  };

  const login = async () => {
    try {
      const userLoggedIn = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(userLoggedIn);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className='auth'>
      <div className='register'>
        <div className='auth__container'>
          <div className='auth__brand'>
            <SiTodoist className='auth__brandLogo' />
            <span className='auth__brandName'>todoist</span>
          </div>
          <h1 className='auth__title'>{'Sign up'}</h1>
          <button className='auth__providerBtn'> Continue with Google</button>
          <hr className='auth__divider' />
          <div className='auth__form'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button onClick={register}>Sign up with Email</button>
          </div>
        </div>
      </div>

      <div className='login'>
        <div className='auth'>
          <div className='auth__brand'>
            <SiTodoist className='auth__brandLogo' />
            <span className='auth__brandName'>todoist</span>
          </div>
          <h1 className='auth__title'>{'Log in'}</h1>
          <button className='auth__providerBtn'> Continue with Google</button>
          <hr className='auth__divider' />
          <div className='auth__form'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button onClick={login}>Login with Email</button>
          </div>
        </div>
      </div>
      <h4> User Logged In:</h4>
      {user?.email}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Auth;

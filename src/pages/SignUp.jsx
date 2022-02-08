import { useState, useEffect, useContext } from 'react';
import { SiTodoist } from 'react-icons/si';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase-config';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { user, setUser } = useContext(UserContext);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate('/today');
  }, [user]);

  const signUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.error(error);
    }
  };

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return (
    <div className='signIn'>
      <div className='brand'>
        <SiTodoist className='brand__logo' />
        <span className='brand__name'>todoist</span>
      </div>
      <h1 className='signIn__title'>Sign up</h1>
      <button className='signIn__providerBtn'> Continue with Google</button>
      <hr className='signIn__divider' />
      <form className='auth__form' onSubmit={(e) => signUp(e)}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          autoComplete='email'
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          autoComplete='current-password'
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button type='submit'>Sign up with Email</button>
      </form>
    </div>
  );
};

export default SignUp;

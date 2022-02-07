import { useState, useContext } from 'react';
import { SiTodoist } from 'react-icons/si';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { setUser } = useContext(UserContext);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const signin = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate('/today');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='signIn'>
      <div className='brand'>
        <SiTodoist className='brand__logo' />
        <span className='brand__name'>todoist</span>
      </div>
      <h1 className='signIn__title'>Log in</h1>
      <button className='signIn__providerBtn'> Continue with Google</button>
      <hr className='signIn__divider' />
      <div className='signIn__form'>
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
        <button onClick={signin}>Login with Email</button>
      </div>
    </div>
  );
};

export default SignIn;

import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiTodoist } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { IoPerson } from 'react-icons/io5';
import { RiErrorWarningFill } from 'react-icons/ri';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import { UserContext } from '../contexts/UserContext';

const SignIn = () => {
  const { user, setUser } = useContext(UserContext);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/today');
  }, [user]);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
    } catch (error) {
      setAuthError(error?.message);
    }
  };

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return (
    <div className='auth'>
      <div className='auth__container'>
        <div className='auth__brand'>
          <SiTodoist />
          <span>todoist clone</span>
        </div>
        <h1 className='auth__title'>Log in</h1>
        <button className='auth__providerBtn button__secondary'>
          <span>
            <FcGoogle />
          </span>
          Continue with Google
        </button>
        <button className='auth__providerBtn button__secondary'>
          <span>
            <IoPerson className='auth__iconGuest' />
          </span>
          Continue as guest
        </button>
        <div className='auth__dividerText'>OR</div>

        {authError && (
          <p className='auth__error'>
            <RiErrorWarningFill />
            <span className='auth__errorMessage'>{authError}</span>
          </p>
        )}
        <form className='auth__form' onSubmit={(e) => signIn(e)}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            autoComplete='email'
            required
            value={signInEmail}
            onChange={(e) => setSignInEmail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            autoComplete='current-password'
            required
            minLength={6}
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
          />
          <button type='submit' className='button__primary'>
            Login with Email
          </button>
          <hr />
          <p>
            Don't have an account yet? <a href='/signup'>Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

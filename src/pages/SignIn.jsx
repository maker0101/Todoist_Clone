import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiTodoist } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { IoPerson } from 'react-icons/io5';
import { RiErrorWarningFill } from 'react-icons/ri';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import { UserContext } from '../contexts/UserContext';
import useAuth from '../hooks/useAuth';
import useSeedDb from '../hooks/useSeedDb';

const SignIn = () => {
  const { user, setUser } = useContext(UserContext);
  const {
    handleSignIn,
    authError,
    signInEmail,
    setSignInEmail,
    signInPassword,
    setSignInPassword,
    isNewUser,
  } = useAuth();
  const navigate = useNavigate();
  const { seedDb } = useSeedDb();

  useEffect(() => {
    if (user) navigate('/today');
    if (user && isNewUser()) seedDb();
  }, [user]);

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return (
    <div className='auth'>
      <div className='auth__container'>
        <div className='auth__brand'>
          <SiTodoist />
          <span>todoist clone</span>
        </div>
        <h1 className='auth__title'>Log in</h1>
        <button
          onClick={() => handleSignIn('google')}
          className='auth__providerBtn button__secondary'
          data-cy='signIn__google'>
          <span>
            <FcGoogle />
          </span>
          Continue with Google
        </button>
        <button
          onClick={() => handleSignIn('guest')}
          className='auth__providerBtn button__secondary'
          data-cy='signUp__guest'>
          <span>
            <IoPerson className='auth__iconGuest' />
          </span>
          Continue as guest
        </button>
        <div className='auth__dividerText'>
          <span className='whiteDashes'>---</span>OR
          <span className='whiteDashes'>---</span>
        </div>

        {authError && (
          <p className='auth__error'>
            <RiErrorWarningFill />
            <span className='auth__errorMessage'>{authError}</span>
          </p>
        )}
        <form className='auth__form' onSubmit={(e) => handleSignIn('email', e)}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            data-cy='signIn__email'
            autoComplete='email'
            required
            value={signInEmail}
            onChange={(e) => setSignInEmail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            data-cy='signIn__password'
            autoComplete='current-password'
            required
            minLength={6}
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
          />
          <button
            type='submit'
            className='button__primary'
            data-cy='signIn__submitBtn'>
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

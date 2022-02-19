import { useEffect, useContext } from 'react';
import { SiTodoist } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { IoPerson } from 'react-icons/io5';
import { RiErrorWarningFill } from 'react-icons/ri';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useSeedDb from '../hooks/useSeedDb';

const SignUp = () => {
  const { user, setUser } = useContext(UserContext);
  const {
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    authError,
    handleSignUp,
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
      <div className='auth__container' data-cy='auth__container'>
        <div className='auth__brand'>
          <SiTodoist />
          <span>todoist clone</span>
        </div>
        <h1 className='auth__title'>Sign up</h1>
        <button
          onClick={(e) => handleSignUp('google', e)}
          className='auth__providerBtn button__secondary'
          data-cy='signUp__google'>
          <span>
            <FcGoogle />
          </span>
          Continue with Google
        </button>
        <button
          onClick={(e) => handleSignUp('guest', e)}
          className='auth__providerBtn button__secondary'
          data-cy='signUp__guest'>
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
        <form className='auth__form' onSubmit={(e) => handleSignUp('email', e)}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            data-cy='signUp__email'
            autoComplete='email'
            required
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            data-cy='signUp__password'
            autoComplete='current-password'
            required
            minLength={6}
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
          <button
            type='submit'
            className='button__primary'
            data-cy='signUp__submitBtn'>
            Sign up with Email
          </button>
          <hr />
          <p>
            Already signed up? <a href='/signin'>Go to log in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

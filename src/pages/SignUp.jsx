import { useState, useEffect, useContext } from 'react';
import { SiTodoist } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { IoPerson } from 'react-icons/io5';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase-config';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import useSeedDb from '../hooks/useSeedDb';

const SignUp = () => {
  const { user, setUser } = useContext(UserContext);
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const navigate = useNavigate();
  //const { seedDb } = useSeedDb();

  useEffect(() => {
    if (user) {
      //seedDb();
      navigate('/today');
    }
  }, [user]);

  const signUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
    } catch (error) {
      console.error(error);
    }
  };

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return (
    <div className='auth'>
      <div className='auth__container'>
        <div className='auth__brand'>
          <SiTodoist />
          <span>todoist</span>
        </div>
        <h1 className='auth__title'>Sign up</h1>
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
        <form className='auth__form' onSubmit={(e) => signUp(e)}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            autoComplete='email'
            required
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            autoComplete='current-password'
            required
            minLength={6}
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
          <button type='submit' className='button__primary'>
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

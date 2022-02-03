import { useState } from 'react';
import { SiTodoist } from 'react-icons/si';
import { auth } from 'firebase';

function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const register = async () => {};

  const login = async () => {};

  const logout = async () => {};

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
          <form className='auth__form'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' value={registerEmail} />
            <label htmlFor='password'>Password</label>
            <input type='password' name='email' value={registerPassword} />
            <button type='submit'>{`${'Sign up'} with Email`}</button>
          </form>
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
          <form className='auth__form'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' value={loginEmail} />
            <label htmlFor='password'>Password</label>
            <input type='password' name='email' value={loginPassword} />
            <button type='submit'>{`${'Login'} with Email`}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;

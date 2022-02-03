import { useState } from 'react';
import { SiTodoist } from 'react-icons/si';

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
      <div className='auth__container'>
        <div className='auth__brand'>
          <SiTodoist className='auth__brandLogo' />
          <span className='auth__brandName'>todoist</span>
        </div>
        <h1 className='auth__title'>{isLogin ? 'Log in' : 'Sign up'}</h1>
        <button className='auth__providerBtn'> Continue with Google</button>
        <hr className='auth__divider' />
        <form className='auth__form'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            value={isLogin ? loginEmail : registerEmail}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='email'
            value={isLogin ? loginPassword : registerPassword}
          />
          <button type='submit'>{`${
            isLogin ? 'Login' : 'Sign up'
          } with Email`}</button>
        </form>
      </div>
    </div>
  );
}

export default Auth;

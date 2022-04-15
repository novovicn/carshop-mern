import React, { useEffect, useState } from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser, login } from '../features/auth/authSlice';
import './Auth.css';

function Auth() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [isReg, setIsReg] = useState(false);

  const { user, error, message } = useSelector(state => state.auth);

  useEffect(() => {
    console.log(error);
  }, [user, error])

  const location = useLocation();
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if(user){
      history.push(redirect);
    }
  }, [user])

  const changeReg = () => {
    setIsReg(!isReg);
  };

  const signIn = (e) => {
    e.preventDefault();
    dispatch(login({email, password}))
  };

  const register = (e) => {
    e.preventDefault();
    //TODO: create name field
    dispatch(registerUser({name, email, password}));
  };

  console.log(error);
  return (
    <div className="auth">
      {error && <h1>{message}</h1>}
      <div className="auth__container">
        <h1>{isReg ? 'Sign up' : 'Sign in'}</h1>
        <form>
          {isReg && (
            <input
            type="text"
            className="auth__input"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          )}
          <input
            type="text"
            className="auth__input"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="auth__input"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="auth__submit"
            onClick={isReg ? register : signIn}
          >
            {isReg ? 'Register' : 'Login'}
          </button>
        </form>
        <p></p>
        <p onClick={changeReg} className="auth__switch">
          {isReg ? 'Switch to Login' : 'Switch to register'}
        </p>
      </div>
    </div>
  );
}

export default Auth;

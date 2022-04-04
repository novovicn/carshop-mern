import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../features/auth/authSlice';
import './Auth.css';

function Auth(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [isReg, setIsReg] = useState(false);

  const changeReg = () => {
    setIsReg(!isReg);
  };

  const signIn = (e) => {
    e.preventDefault();

    fetch('/auth', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        'email': email,
        'password': password
      }),
    })
      .then(response => response.json())
        //history.push('/');
      .then(data => {
        sessionStorage.setItem('cs_access_token', data.access_token); 
        sessionStorage.setItem('cs_refresh_token', data.refresh_token);  
      })
      .catch((error) => console.log(error));
  };

  const register = (e) => {
    e.preventDefault();
    //TODO: create name field
    const name = 'Test Name'
    dispatch(registerUser({name, email, password}));
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <h1>{isReg ? 'Sign up' : 'Sign in'}</h1>
        <form>
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

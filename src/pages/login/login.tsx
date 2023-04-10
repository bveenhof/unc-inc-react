import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { DashboardContext } from '../../context/dashboardProvider';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { setIsLoggedIn, isLoggedIn } = useContext(DashboardContext);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    if (username === 'uncinc' && password === 'letmein') {
      localStorage.setItem('username', `${username}`);

      setIsLoggedIn && setIsLoggedIn(true);

      /* ToDo: Currently hardcoded. Make this more dynamic (rturn to previous page, instead of hardcoding dashboard) */
      navigate('/dashboard');
    } else {
      setError('Incorrect username and/or password');
    }
  };

  return (
    <section className="login">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="username">
          Username
          <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleLogin}>Submit</button>
      </form>
      {error && error}
    </section>
  );
}

export default Login;

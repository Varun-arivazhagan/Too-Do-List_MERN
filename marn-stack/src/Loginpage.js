// LoginPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy data for the example
    // const user = {
    //   f_Id: 1,
    //   f_Image: 'path/to/image',
    //   f_Name: username,
    //   f_Email: 'user@example.com',
    //   f_Mobile: '1234567890',
    //   f_Designation: 'Developer',
    //   f_gender: 'Male',
    //   f_Course: 'React Development',
    //   f_Createdate: new Date().toISOString()
    // };

    // Handle login logic here
    // Assuming successful login, redirect to next page with state
    // navigate('/next', { state: user });
    navigate('/Employee')
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin} className="form">
        <h2>Login</h2>
        <div className="inputGroup">
          <label htmlFor="username" className="label">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

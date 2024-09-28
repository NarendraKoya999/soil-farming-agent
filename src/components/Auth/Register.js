// src/components/Register.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebaseConfig';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';
import logger from '../../utils/logger';
import '../../styles/Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(loginUser(userCredential.user));
      logger(`User registered: ${userCredential.user.email}`);
    } catch (error) {
      console.error("Error registering: ", error);
    }
  };

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleRegister}>
        <h2>Register</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

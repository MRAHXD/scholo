import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './FirebaseClient.js';
import './style.css';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const name = router.query.name;


  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        alert('User Logged In');
        window.location.href = '/';
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='signup-container'>
      <div className='form-container'>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='text'
          placeholder='Email'
          className='input-field'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
          className='input-field'
        />
        <button onClick={signIn} className='signup-btn'>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

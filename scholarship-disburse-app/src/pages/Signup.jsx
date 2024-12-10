
import { auth } from './FirebaseClient';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import './style.css';
import { useRouter } from 'next/router';
import { useState } from 'react';


const SignUp = () => {
    const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const createUser = (e) => {  
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)  
      .then((userCredential) => {  
        return updateProfile(userCredential.user, {  
          displayName: name,  
        });  
      })  
      .then(() => {  
        alert('User Created Successfully');
        router.push("/Login");  
      })  
      .catch((error) => console.error(error));  
  };  

  return (
    <div className="signup-container ">
      
      <form className='form-container'>
      <h2 className='title'>Create Account</h2>
        <label>
          
        Name:<input className='input-field' value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Name" required />
        </label>
        <label>
          Email:
          <input className='input-field' value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" required />
        </label>
        <label>
          Password:
          <input className='input-field' value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
        </label>
        <button onClick={createUser} className='signup-btn'>Sign Up</button>
        <button className='signup-btn'>Login</button>
      </form>
    </div>
  );
};

export default SignUp;

import React, { useState } from 'react';
import './login.scss';
import {auth} from '../../config/Authconfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useCustomhook } from '../../context/ContextProvider';
const Login = () => {
  let { setislogin} = useCustomhook();
  const navigate = useNavigate()
  let [Email , setEmail] = useState("")
  let [Password, setPassword] = useState("")

  let SignIn = ()=>{
signInWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setislogin(true)
    localStorage.setItem("islogin", JSON.stringify(true))
    navigate('/')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  }
  return (
    <div>
      <input className='email' type="email" placeholder='Email' autoComplete='off'
      onChange={ e => setEmail(e.target.value) }/>
      <input className='password' type="password" placeholder='Password'
      onChange={ e => setPassword(e.target.value)} />
      <button className='signin__btn' onClick={SignIn }>Sign in</button>
    </div>
  )
}

export default Login
import React, { useState } from 'react';
import Register from '../register/Register';
import './login.scss';

const Login = ({ onClose }) => {
  const [openRegModal, setOpenRegModal] = useState(false);

  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='container'>
        <h2>Login</h2>
        <p>Email</p>
        <input type='text' />
        <p>Password</p>
        <input type='password' name='' id='' />
        <button>Login</button>
        <p>
          Don't have an account? Please,{' '}
          <span
            onClick={() => {
              setOpenRegModal(true);
            }}>
            register
          </span>{' '}
          here!
        </p>
      </div>
      {openRegModal && <Register onClose={() => setOpenRegModal(false)} />}
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import './grayHeader.scss';
import Login from '../login/Login';

const GrayHeader = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='gheader'>
      <div className='inquiries'>
        <span>For Inquiries: </span>+94 76 543 4789
      </div>
      <div className='right'>
        <p className='login' onClick={() => setOpenModal(true)}>
          Login
        </p>
        <div class='vl'></div>
        <p className='currency'>LKR</p>
      </div>
      {openModal && <Login onClose={() => setOpenModal(false)} />}
    </div>
  );
};

export default GrayHeader;

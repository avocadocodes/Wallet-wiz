// SideBar.js
import React from 'react';

const SideBar = ({ onRequest, onSend }) => {
  return (
    <div className='flex flex-col border border-gray-500 p-6 items-center text-2xl font-bold'>
      <div className='p-10'>
        Logo
      </div>
      <button className='p-5' onClick={onRequest}>
        Request Money
      </button>
      <button className='p-5' onClick={onSend}>
        Send Money
      </button>
    </div>
  );
};

export default SideBar;

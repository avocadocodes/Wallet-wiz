
import React from 'react';

const SideBar = ({ onRequest, onSend }) => {
  return (
    <div className='flex flex-col bg-[#b09cd3] p-6 items-center text-2xl font-bold'>
      <div className='p-10'>
        Logo
      </div>
      <div className="flex flex-col space-y-4">
        <button className="p-5 bg-[#3f205d] text-white rounded-xl" onClick={onRequest}>
          Request Money
        </button>
        <button className="p-5 bg-[#3f205d] text-white rounded-xl" onClick={onSend}>
          Send Money
        </button>
      </div>
    </div>
  );
};

export default SideBar;

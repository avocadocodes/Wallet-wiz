import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import profileImage from './profile.png';

const Profile = () => {
  const userStatus = useSelector((state) => state.userStatus);
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-4 right-4">
      <div className="relative inline-block">
        <img
          src={profileImage}
          alt="Profile"
          className="w-12 h-12 rounded-full cursor-pointer"
          onClick={toggleBox}
        />
        {isOpen && (
          <div className="absolute right-0 mt-2 w-64 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="text-lg font-bold">{userStatus.userStatus.name}</div>
            <div className="text-sm text-gray-600">{userStatus.userStatus.email}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

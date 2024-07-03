import React from 'react'
import { useSelector } from 'react-redux';
function Profile() {
  const userStatus = useSelector((state) => state.userStatus);

  return (
    <div className='flex flex-row justify-end p-10'>
          <div className='flex flex-col'>
            <div>
              {userStatus.userStatus.name}
            </div>
            <div>
              {userStatus.userStatus.email}
            </div>
          </div>
        </div>
  )
}

export default Profile

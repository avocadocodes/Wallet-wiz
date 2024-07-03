import React from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'
function Requests() {
  const userStatus = useSelector((state) => state.userStatus);
    const getRequests = async () => {
        try {
          console.log(userStatus.userStatus.email);
          const res = await axios.post('http://localhost:3000/getRequests', { email: userStatus.userStatus.email });
          console.log(res.data);
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <button onClick={getRequests} className='flex flex-col rounded-lg p-10 flex-1 justify-between'>
        <div className='text-3xl font-bold'>
            Requests Received
        </div>
    </button>
  )
}

export default Requests

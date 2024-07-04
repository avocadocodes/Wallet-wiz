import React from 'react'
import { useSelector } from 'react-redux';
import { useState ,useEffect} from 'react';
import axios from 'axios'
function Requests() {
  const userStatus = useSelector((state) => state.userStatus);
  const [requests,setRequests]=useState([])
    const getRequests = async () => {
        try {
          console.log(userStatus.userStatus.email);
          const res = await axios.post('http://localhost:3000/getRequests',{ email: userStatus.userStatus.email});
          console.log(res.data.list);
          setRequests(res.data.list)
        } catch (error) {
          console.error(error);
        }
      };
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        };
        return date.toLocaleString('en-IN', options);
      };
  return (
    <div className='flex flex-col rounded-lg p-10 w-2/3 justify-between'>
      <button onClick={getRequests} className='text-3xl font-bold'>
          Requests Received
      </button>
      <div className='flex flex-col py-5 px-5 overflow-y-auto max-h-96'>
        {requests.map((request, key) => (
          <div className='flex flex-row justify-between items-center border-b border-gray-200 py-4' key={key}>
            <div className='flex flex-col'>
              {/* <div className='text-lg font-bold bg-[#b09cd3] rounded-2xl py-4 px-4'>RequestId ID: {request.requestReceivedId}</div>
              <div className='text-sm text-gray-600'>Date: {formatDate(request.date)}</div> */}
            </div>
            <div className='flex flex-col'>
              <div className='text-lg font-bold'>From: {request.requestReceivedDetail.email}</div>
            </div>
            <div className='flex flex-col'>
              <div className='text-lg font-bold text-gray-800'>Amount: Rs {request.requestReceivedDetail.amount}</div>
              <div className='ml-4 text-sm text-gray-600'>Name: {request.requestReceivedDetail.person}</div>
            </div>
            <div className='flex flex-row space-x-4'>
              <button className='bg-green-600 text-white px-2 py-2 rounded-xl'>
                Accept
              </button>
              <button className='bg-red-600 text-white px-2 py-2 rounded-xl'>
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Requests

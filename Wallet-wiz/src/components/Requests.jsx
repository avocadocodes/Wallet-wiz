import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { sendMoney } from '../Store/userDataSlice';
import { FaMoneyBillAlt } from 'react-icons/fa';

function Requests() {
  const userStatus = useSelector((state) => state.userStatus);
  const [requests, setRequests] = useState([]);
  const dispatch = useDispatch();

  const getRequests = async () => {
    try {
      console.log(userStatus.userStatus.email);
      const res = await axios.post('http://localhost:3000/getRequests', { email: userStatus.userStatus.email });
      console.log(res.data.list);
      setRequests(res.data.list);
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

  const acceptRequest = async (receiverEmail, amount, requestId) => {
    try {
      console.log(userStatus.userStatus.email);
      const res = await axios.post('http://localhost:3000/acceptRequest', { senderEmail: userStatus.userStatus.email, receiverEmail, amount: parseInt(amount, 10), requestId });
      if (res.status === 200) {
        const { moneyReceived, moneySent, balance } = res.data;
        await dispatch(sendMoney({ balance, moneyReceived, moneySent }));
        getRequests();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const declineRequest = async (receiverEmail, requestId) => {
    try {
      console.log(userStatus.userStatus.email);
      const res = await axios.post('http://localhost:3000/declineRequest', { senderEmail: userStatus.userStatus.email, receiverEmail, requestId });
      if (res.status === 200) {
        getRequests();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <div className='flex flex-col rounded-lg p-10 justify-between w-2/3'>
      <div className='flex justify-between items-center mb-5'>
        <div className='font-semibold text-2xl'>
          Requests Received
        </div>
        <button onClick={getRequests} className='text-3xl font-bold flex items-center'>
          <FaMoneyBillAlt className='ml-2' />
        </button>
      </div>

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
              <button onClick={() => acceptRequest(request.requestReceivedDetail.email, request.requestReceivedDetail.amount, request.requestReceivedId)} className='bg-green-600 text-white px-2 py-2 rounded-xl'>
                Accept
              </button>
              <button onClick={() => declineRequest(request.requestReceivedDetail.email, request.requestReceivedId)} className='bg-red-600 text-white px-2 py-2 rounded-xl'>
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Requests;

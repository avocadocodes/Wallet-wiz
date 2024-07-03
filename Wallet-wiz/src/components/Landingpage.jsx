import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import Profile from './Profile';
import Transaction from './Transaction';
import { sendMoney } from '../Store/userDataSlice';
export function Landingpage() {
  const [transactions, setTransactions] = useState([]);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const userStatus = useSelector((state) => state.userStatus);
  const navigate = useNavigate();
  const dispatch =useDispatch()
  const handleShowRequestModal = () => {
    setShowRequestModal(true);
  };

  const handleShowSendModal = () => {
    setShowSendModal(true);
  };

  const handleCloseModal = () => {
    setShowRequestModal(false);
    setShowSendModal(false);
  };

  const handleRequestSubmit = async (formData) => {
    try {
      const email = formData.get('email');
      const amount = formData.get('amount');
      console.log(userStatus.userStatus.email);
      const res = await axios.post('http://localhost:3000/requestMoney', {
        senderEmail: userStatus.userStatus.email,
        receiverEmail: email,
        amount:  parseInt(amount, 10)
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleSendSubmit = async (formData) => {
    try {
      const email = formData.get('email');
      const amount = formData.get('amount');
      console.log(userStatus.userStatus.email);
      const res = await axios.post('http://localhost:3000/sendMoney', {
        senderEmail: userStatus.userStatus.email,
        receiverEmail: email,
        amount:  parseInt(amount, 10)
      });
      console.log(res);
      if(res.status==200){
        const {moneyReceived,moneySent,balance}=res.data
        dispatch(sendMoney(moneyReceived,moneySent,balance))
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getRequests = async () => {
    try {
      console.log(userStatus.userStatus.email);
      const res = await axios.post('http://localhost:3000/getRequests', { email: userStatus.userStatus.email });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!userStatus.userStatus.loggedIn) {
      alert('You have been logged out. Please login again.');
      navigate('/');
    }
  }, [userStatus.userStatus.loggedIn, navigate]);

  return (
    <div className="flex flex-row justify-between w-full p-5 h-screen">
      <SideBar onRequest={handleShowRequestModal} onSend={handleShowSendModal} />
      <div className='flex flex-col w-full  mx-10'>
        <Profile/>
        <div className='flex flex-row justify-evenly p-10 space-x-4'>
          <div className='flex flex-col  rounded-lg p-10 bg-[#b09cd3] flex-1 justify-between'>
            <div className='text-3xl font-bold '>
              Balance
            </div>
            <div className='text-2xl font-bold '>
              Rs {userStatus.userStatus.balance}
            </div>
          </div>
          <div className='flex flex-col rounded-lg p-10 bg-[#b09cd3] flex-1 justify-between'>
            <div className='text-3xl font-bold'>
              Money Sent
            </div>
            <div className='text-2xl font-bold'>
              Rs {userStatus.userStatus.balance}
            </div>
          </div>
          <button onClick={getRequests} className='flex flex-col  rounded-lg p-10 bg-[#b09cd3] flex-1 justify-between'>
            <div className='text-3xl font-bold'>
              Requests Received
            </div>
          </button>
        </div>
        <Transaction/>
        
      </div>
      <Modal show={showRequestModal} onClose={handleCloseModal} modalContent="Request Money" onSubmit={handleRequestSubmit} />
      <Modal show={showSendModal} onClose={handleCloseModal} modalContent="Send Money" onSubmit={handleSendSubmit} />
    </div>
  );
}

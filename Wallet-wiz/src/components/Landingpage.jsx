import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Profile from './Profile';
import Transaction from './Transaction';
import { sendMoney } from '../Store/userDataSlice';
import TopBar from './TopBar';
import Chart from './Chart';
import Requests from './Requests';
export function Landingpage() {
  const [transactions, setTransactions] = useState([]);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const userStatus = useSelector((state) => state.userStatus);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      if(amount<=0){
        alert("not valid money")
        return
      }
      if(amount>100000){
        alert("you can't request more than Rs 100000")
        return
      }
      if(email===userStatus.userStatus.email){
        alert('you cannot request money from yourself')
        return ;
      }
      console.log(userStatus.userStatus.email);
      const res = await axios.post('http://localhost:3000/requestMoney', {
        senderEmail: userStatus.userStatus.email,
        receiverEmail: email,
        amount: parseInt(amount, 10)
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendSubmit = async (formData) => {
    try {
      const email = formData.get('email');
      const amount = formData.get('amount');
      if(amount<=0){
        alert("not valid money")
        return
      }
      if (amount > userStatus.userStatus.balance) {
        alert("You don't have enough balance");
        return;
      }
      if(email===userStatus.userStatus.email){
        alert('you cannot send money to yourself')
        return ;
      }
      console.log(userStatus.userStatus.email);
      const res = await axios.post('http://localhost:3000/sendMoney', {
        senderEmail: userStatus.userStatus.email,
        receiverEmail: email,
        amount: parseInt(amount, 10)
      });
      console.log(res);
      if (res.status === 200) {
        const { moneyReceived, moneySent, balance } = res.data;
        await dispatch(sendMoney({ balance: balance, moneyReceived: moneyReceived, moneySent: moneySent }));
      }
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
        <TopBar/>
        <div className='flex flex-row'>
          <Chart/>
          <Requests/>
        </div>
        <Transaction/>
      </div>
      <Modal show={showRequestModal} onClose={handleCloseModal} modalContent="Request Money" onSubmit={handleRequestSubmit} />
      <Modal show={showSendModal} onClose={handleCloseModal} modalContent="Send Money" onSubmit={handleSendSubmit} />
    </div>
  );
}

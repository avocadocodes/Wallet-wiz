import React from 'react'
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'
function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const userStatus = useSelector((state) => state.userStatus);

  const getTransactions = async () => {
    try {
      const res = await axios.post('http://localhost:3000/getTransactions', { email: userStatus.userStatus.email });
      setTransactions(res.data.list);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTransactions();
  }, []);
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
    <div>
    <div className='flex flex-row justify-evenly'>
      <div className='text-3xl font-bold text-neutral-600'>
        Your Transactions
      </div>
      <div className='flex flex-row justify-between'>
        <div className='text-2xl font-bold text-slate-800'>
          Refresh
        </div>
        <button onClick={getTransactions}>
          Icon
        </button>
      </div>
    </div>
    <div className='flex flex-col py-5 px-5'>
  {transactions.map((transaction, key) => (
    <div className='flex flex-row justify-between items-center border-b border-gray-200 py-4' key={key}>
      <div className='flex flex-col'>
        <div className='text-lg font-bold'>Transaction ID: {transaction.transactionId}</div>
        <div className='text-sm text-gray-600'>Date: {formatDate(transaction.date)}</div>
      </div>
      <div className='flex flex-col'>
        <div className='text-lg font-bold text-blue-600'>Action: {transaction.transactionDetail.action}</div>
      </div>
      <div className='flex flex-col'>
        <div className='text-lg font-bold'>Email: {transaction.transactionDetail.email}</div>
      </div>
      <div className='flex flex-col'>
        <div className='text-lg font-bold text-gray-800'>Amount: Rs {transaction.transactionDetail.amount}</div>
        <div className='ml-4 text-sm text-gray-600'>Name: {transaction.transactionDetail.person}</div>
      </div>
    </div>
  ))}
</div>









  </div>
  )
}

export default Transaction

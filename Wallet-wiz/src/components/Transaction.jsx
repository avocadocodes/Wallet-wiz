import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { sendMoney } from '../Store/userDataSlice';

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const userStatus = useSelector((state) => state.userStatus);
  const dispatch = useDispatch();

  const getTransactions = async () => {
    try {
      const res = await axios.post('https://wallet-wiz-cqwk.onrender.com/getTransactions', { email: userStatus.userStatus.email });
      const { balance, moneySent, moneyReceived } = res.data;
      dispatch(sendMoney({ balance: balance, moneyReceived: moneyReceived, moneySent: moneySent }));
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
      <div className='flex flex-row justify-evenly space-y-9 items-center'>
        <div className='text-3xl font-bold text-neutral-600'>
          Your Transactions
        </div>
        <div className='flex flex-row justify-between'>
          <button className="bg-[#b09cd3] rounded-3xl px-4 py-4 font-semibold" onClick={getTransactions}>
            Refresh
          </button>
        </div>
      </div>
      <div className='flex flex-col py-5 px-5 overflow-y-auto max-h-96'>
        {transactions.length === 0 ? (
          <div className='flex justify-center items-center py-5'>
            <div className='text-xl text-gray-500'>No transactions</div>
          </div>
        ) : (
          transactions.map((transaction, key) => (
            <div className='flex flex-row justify-between items-center border-b border-gray-200 py-4' key={key}>
              <div className='flex flex-col'>
                <div className='text-lg font-bold bg-[#b09cd3] rounded-2xl py-4 px-4'>Transaction ID: {transaction.transactionId}</div>
                <div className='text-sm text-gray-600'>Date: {formatDate(transaction.date)}</div>
              </div>
              <div className='flex flex-col'>
                <div className='text-lg font-bold text-black'>Action: {transaction.transactionDetail.action}</div>
              </div>
              <div className='flex flex-col'>
                <div className='text-lg font-bold'>Email: {transaction.transactionDetail.email}</div>
              </div>
              <div className='flex flex-col'>
                <div className='text-lg font-bold text-gray-800'>Amount: Rs {transaction.transactionDetail.amount}</div>
                <div className='ml-4 text-sm text-gray-600'>Name: {transaction.transactionDetail.person}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Transaction;

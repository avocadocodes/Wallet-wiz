import  { useEffect, useState } from 'react';
import SideBar from './SideBar';
import Transaction from './Transaction';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
export function Landingpage() {
  const [transactions, setTransactions] = useState([]);
  const userStatus=useSelector(state=>state.userStatus)
  const [newTransaction, setNewTransaction] = useState({
    user: '',
    amount: 0,
    action: '',
  });

  const handleInputChange = (e) => {
    setNewTransaction({
      ...newTransaction,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTransaction = () => {
    if (newTransaction.action === 'Sent' || newTransaction.action === 'Received') {
      setTransactions([...transactions, newTransaction]);
    }
    setNewTransaction({ user: '', amount: 0, action: '' });
  };

  const moneySent = transactions.reduce((total, transaction) => {
    return transaction.action === 'Sent' ? total + transaction.amount : total;
  }, 0);

  const moneyReceived = transactions.reduce((total, transaction) => {
    return transaction.action === 'Received' ? total + transaction.amount : total;
  }, 0);

  const balance = moneyReceived - moneySent;
  useEffect(()=>{

  },[])
  return (
    <div className="flex h-screen">
      {
        !userStatus.userStatus.loggedIn? 
        <div className="flex justify-center items-center h-full">
        <Link to="/">
          <button className="w-full bg-blue-500 text-white py-4 px-6 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl">
            LOGIN TO ENTER
          </button>
        </Link>
      </div>


        :
      <div>
      <SideBar/>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-3 rounded bg-gray-200 text-gray-800 flex-1 mr-6"
          />
        </div>
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-2xl font-bold mb-2">Money Sent</h3>
            <p className="text-4xl">${moneySent}</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-2xl font-bold mb-2">Money Received</h3>
            <p className="text-4xl">${moneyReceived}</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-2xl font-bold mb-2">Balance</h3>
            <p className="text-4xl">${balance}</p>
          </div>
          <Transaction email='x' amount='0' action='x' time='1' name='x'/>
        </div>
      </div>
      </div>
      }
    </div>
  );
}
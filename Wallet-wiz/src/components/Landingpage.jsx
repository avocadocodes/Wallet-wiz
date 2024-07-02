import { useEffect, useState } from 'react';
import SideBar from './SideBar';
import Transaction from './Transaction';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export function Landingpage() {
  const [transactions, setTransactions] = useState([]);
  const userStatus = useSelector((state) => state.userStatus);
  const [newTransaction, setNewTransaction] = useState({
    user: '',
    amount: 0,
    action: '',
  });

  return (
    <div className="flex h-screen flex-col">
      {!userStatus.userStatus.loggedIn ? (
        <div className="flex justify-center items-center h-full w-full">
          <Link to="/">
            <button className="w-full bg-blue-500 text-white py-4 px-6 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl">
              LOGIN TO ENTER
            </button>
          </Link>
        </div>
      ) : (
        <div className="">
          <SideBar />
          <div className='flex flex-col '>
            <div className='flex flex-row flex-wrap'>
              <div className='text-2xl font-bold p-5'>
                Balance
              </div>
              <div className='text-2xl font-bold p-5'>
                Balance
              </div>
              <div className='text-2xl font-bold p-5'>
                Balance
              </div>
              <div className='text-2xl font-bold p-5'>
                Balance
              </div>
            </div>
            <Transaction email="x" amount="0" action="x" time="1" name="x" />
          </div>
        </div>
      )}
    </div>
  );
}

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
          <div className='flex flex-grow flex-col '>
          
          <div className="  p-10 bg-white flex justify-between item">
            <div className="bg-gray-200 p-10 rounded-lg shadow-lg text-4xl font-bold flex-1 text-center mx-4">
              <div className="p-10">Balance</div>
            </div>
            <div className="bg-gray-200 p-10 rounded-lg shadow-lg text-4xl font-bold flex-1 text-center mx-4">
            <div className='p-10'>Money Sent</div>
            </div>
            <div>
              <button  className="bg-gray-500 text-white py-4 px-6 rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl justify-center items-center">Requests Received</button>
            </div>
          </div>


            <Transaction email="x" amount="0" action="x" time="1" name="x" />
          </div>
        </div>
      )}
    </div>
  );
}

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
  const [isDarkTheme, setIsDarkTheme] = useState(false);

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

  useEffect(() => {}, []);

  return (
    <div className={`flex h-screen ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {!userStatus.userStatus.loggedIn ? (
        <div className="flex justify-center items-center h-full w-full">
          <Link to="/">
            <button className="w-full bg-blue-500 text-white py-4 px-6 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl">
              LOGIN TO ENTER
            </button>
          </Link>
        </div>
      ) : (
        <>
          <SideBar />
          <div className="flex-1 p-6 ml-64"> 
            <div className="flex justify-between items-center mb-6">
              <input
                type="text"
                placeholder="Search"
                className={`px-4 py-3 rounded ${isDarkTheme ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'} flex-1 mr-6`}
              />
              <button
                onClick={() => setIsDarkTheme(!isDarkTheme)}
                className="py-2 px-4 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
              >
                Toggle Theme
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className={`p-10 rounded shadow text-center ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-3xl font-bold mb-4">Money Sent</h3>
                <p className="text-5xl">${moneySent}</p>
              </div>
              <div className={`p-10 rounded shadow text-center ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-3xl font-bold mb-4">Money Received</h3>
                <p className="text-5xl">${moneyReceived}</p>
              </div>
              <div className={`p-10 rounded shadow text-center ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-3xl font-bold mb-4">Balance</h3>
                <p className="text-5xl">${balance}</p>
              </div>
            </div>
            <Transaction email="x" amount="0" action="x" time="1" name="x" />
          </div>
        </>
      )}
    </div>
  );
}

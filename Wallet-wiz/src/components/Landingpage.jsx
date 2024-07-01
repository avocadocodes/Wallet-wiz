import  { useState } from 'react';

export function Landingpage() {
  const [transactions, setTransactions] = useState([]);

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

  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 text-white p-6 flex flex-col justify-between w-64">
        <div>
          <img src="/logo.png" alt="Wallet Wiz Logo" className="h-10 mb-10" />
          <nav>
            <a href="#" className="block py-3 hover:bg-gray-700 rounded">
              Receive Money
            </a>
            <a href="#" className="block py-3 hover:bg-gray-700 rounded">
              Send Money
            </a>
          </nav>
        </div>
        <div className="flex items-center">
          <img src="/user-dp.png" alt="User DP" className="h-10 w-10 rounded-full mr-3" />
          <span>John Doe</span>
        </div>
      </div>
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
        </div>
        <div className="bg-white p-6 rounded shadow flex-1">
          <h3 className="text-2xl font-bold mb-6">Transaction History</h3>
          {transactions.length > 0 ? (
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td className="border px-6 py-3">{transaction.user}</td>
                    <td className="border px-6 py-3">${transaction.amount}</td>
                    <td className="border px-6 py-3">{transaction.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center text-gray-500">No transactions to display.</div>
          )}
        </div>
      </div>
    </div>
  );
}
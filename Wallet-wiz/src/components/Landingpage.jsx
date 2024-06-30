
import React from 'react';
export  function Landingpage() {
  return (
    <div className="p-4">
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <img src="/logo.png" alt="Wallet Wiz Logo" className="h-8 mr-4" />
          <input type="text" placeholder="Search" className="px-4 py-2 rounded bg-gray-700 text-white" />
        </div>
        <div className="flex items-center">
          <img src="/user-dp.png" alt="User DP" className="h-8 w-8 rounded-full mr-2" />
          <span>John Doe</span>
        </div>
      </nav>
      <div className="grid grid-cols-3 gap-4 my-4">
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-xl font-bold">Money Sent</h3>
          <p>$500</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-xl font-bold">Money Received</h3>
          <p>$400</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-xl font-bold">Balance</h3>
          <p>$900</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-bold mb-4">Transaction History</h3>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">example@example.com</td>
              <td className="border px-4 py-2">$50</td>
              <td className="border px-4 py-2">Sent</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">test@test.com</td>
              <td className="border px-4 py-2">$100</td>
              <td className="border px-4 py-2">Received</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


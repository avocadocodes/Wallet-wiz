
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'
function TopBar() {
    const [balance ,setBalance]=useState(0)
    const [moneyReceived,setMoneyReceived]=useState(0)
    const [moneySent,setMoneySent]=useState(0)
  const userStatus = useSelector((state) => state.userStatus);
    useEffect(()=>{
        setBalance(userStatus.userStatus.balance)
        setMoneyReceived(userStatus.userStatus.moneyReceived)
        setMoneySent(userStatus.userStatus.moneySent)
    },[userStatus.userStatus.balance,userStatus.userStatus.moneyReceived,userStatus.userStatus.moneySent])
    const getRequests = async () => {
        try {
          console.log(userStatus.userStatus.email);
          const res = await axios.post('http://localhost:3000/getRequests', { email: userStatus.userStatus.email });
          console.log(res.data);
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <div className='flex flex-row justify-evenly p-10 space-x-4'>
          <div className='flex flex-col  rounded-lg p-10 flex-1 justify-between border-2'>
            <div className='text-3xl font-bold '>
              Balance
            </div>
            <div className='text-2xl font-bold '>
              Rs {balance}
            </div>
          </div>
          <div className='flex flex-col  rounded-lg p-10 flex-1 justify-between border-2'>
            <div className='text-3xl font-bold'>
              Money Sent
            </div>
            <div className='text-2xl font-bold'>
              Rs {moneySent}
            </div>
          </div>
          <div className='flex flex-col  rounded-lg p-10 flex-1 justify-between border-2'>
            <div className='text-3xl font-bold'>
              Money Received
            </div>
            <div className='text-2xl font-bold'>
              Rs {moneyReceived}
            </div>
          </div>
          <button onClick={getRequests} className='flex flex-col rounded-lg p-10 flex-1 justify-between'>
            <div className='text-3xl font-bold'>
              Requests Received
            </div>
          </button>
        </div>
  )
}

export default TopBar

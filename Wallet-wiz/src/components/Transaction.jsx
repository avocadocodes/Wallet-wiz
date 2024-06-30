import React from 'react'

function Transaction({email,amount,action,time,name}) {
  return (
<div className="flex flex-row text-2xl justify-between">


        <div className=''>{email}</div>
        <div className=''>{name}</div>
        <div className=''>{action}</div>
        <div className=''>{time}</div>
        <div className=''>{amount}</div>
    </div>
  )
}

export default Transaction

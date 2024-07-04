import './Chart.scss'
import React, { useEffect ,useState} from 'react'
import { useSelector } from 'react-redux'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'

const COLORS = ['#b09cd3', '#3f205d']

const Chart = ({ title, height }) => {
  const userStatus=useSelector(state=>state.userStatus)
  const [moneyReceived,setMoneyReceived]=useState(0)
  const [moneySent,setMoneySent]=useState(0)
  useEffect(()=>{
      setMoneyReceived(userStatus.userStatus.moneyReceived)
      setMoneySent(userStatus.userStatus.moneySent)
  },[userStatus.userStatus.balance,userStatus.userStatus.moneyReceived])

const data = [
  { name: 'Money Received', value: moneyReceived},
  { name: 'Money Sent', value: moneySent },
]
  return (
    <div className='chart w-1/3 '>
      <div className='title'>{title}</div>
      <ResponsiveContainer height={height || 300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart

import './Chart.scss'
import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'

const data = [
  { name: 'Money Received', value: 400 },
  { name: 'Money Sent', value: 300 },
]

const COLORS = ['#b09cd3', '#3f205d']

const Chart = ({ title, height }) => {
  return (
    <div className='chart flex-1 '>
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

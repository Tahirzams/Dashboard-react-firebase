import React, { PureComponent } from 'react';
import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
   
    {
    name:"jan",
    earning: 2000,
    amt:3000

   },
    {
      name: 'feb',
      earning: 2200,
      amt: 2210,
    },
    {
      name: 'march',
      earning: 3600,
      amt: 2290,
    },
    {
      name: 'april',
      earning: 2780,
      amt: 2000,
    },
    {
      name: 'may',
      earning: 5590,
      amt: 2181,
    },
    {
      name: 'june',
      earning: 3390,
      amt: 2500,
    },
    {
      name: 'july',
      earning: 3490,
      amt: 2100,
    },
  ];

const Chart = ({height, title}) => {
  return (
    <div className='chart__main'>
      <h3 className='title'>{title}</h3>
        <AreaChart className='chart__area' width={500}  height={height} data={data}
  margin={{ top: 10, right: 5, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid className='chart__grid' strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="earning" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
    </div>
  )
}

export default Chart
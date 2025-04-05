'use client'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    delta: 40,
    alpha: 24,
    canary: 24,
  },
  {
    name: "Feb",
    delta: 30,
    alpha: 13,
    canary: 22,
  },
  {
    name: "Mar",
    delta: 20,
    alpha: 58,
    canary: 29,
  },
  {
    name: "Apr",
    delta: 14,
    alpha: 30,
    canary: 15,
  },
  {
    name: "May",
    delta: 29,
    alpha: 28,
    canary: 18,
  },
  {
    name: "Jun",
    delta: 19,
    alpha: 19,
    canary: 10,
  },
  {
    name: "Jul",
    delta: 34,
    alpha: 24,
    canary: 14,
  },
  {
    name: "Aug",
    delta: 21,
    alpha: 20,
    canary: 19,
  },
  {
    name: "Sep",
    delta: 49,
    alpha: 43,
    canary: 20,
  },
  {
    name: "Oct",
    delta: 43,
    alpha: 55,
    canary: 4,
  },
  {
    name: "Nov",
    delta: 39,
    alpha: 40,
    canary: 25,
  },
  {
    name: "Dec",
    delta: 34,
    alpha: 43,
    canary: 11,
  },
];

export default function SupportTicketsResolved() {
  return (

    <ResponsiveContainer height={350} width="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="1 4" />
        <XAxis fontSize={12} dataKey="name"/>
        <YAxis fontSize={12} />
        <Tooltip

          labelClassName='font-bold'
          wrapperClassName='dark:[&_.recharts-tooltip-item]:!text-white !text-sm dark:!bg-black rounded-md dark:!border-border'
        />
        <Legend
          formatter={(value)=><span className="capitalize">{value}</span>}
        />
        <Line dataKey="delta" type="monotone" stroke="#339922"/>
        <Line dataKey="alpha" type="monotone" stroke="#1172c9"/>
        <Line dataKey="canary" type="monotone" stroke="#a04433"/>
      </LineChart>
    </ResponsiveContainer>

  );
}
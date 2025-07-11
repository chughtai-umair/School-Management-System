"use client";

import Image from "next/image";
import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expence: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expence: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expence: 6800,
  },
  {
    name: "Apr",
    income: 2780,
    expence: 3908,
  },
  {
    name: "May",
    income: 1890,
    expence: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expence: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expence: 4300,
  },
  {
    name: "Aug",
    income: 3490,
    expence: 4300,
  },
  {
    name: "Sep",
    income: 3490,
    expence: 1300,
  },
  {
    name: "Oct",
    income: 5490,
    expence: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expence: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expence: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full ">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Attendence</h1>
        <Image
          src="/moreDark.png"
          alt="Attendance Chart"
          width={20}
          height={20}
        />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#d1d5db" }}
            axisLine={false}
            tickLine={false}
            tickCount={10}
          />
          <YAxis
            tick={{ fill: "#d1d5db" }}
            axisLine={false}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#8884d8"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expence"
            stroke="#82ca9d"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;

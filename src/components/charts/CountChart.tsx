"use client";

import Image from "next/image";
import React from "react";

import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total Students",
    count: 1900,
    fill: "white",
  },
  {
    name: "Boys",
    count: 1000,
    fill: "#C2EBFB",
  },
  {
    name: "Girls",
    count: 900,
    fill: "#FDE68A",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full  p-4 ">
      {/* TITTLE */}
      <div className=" flex items-center justify-between">
        <h1 className="text-lg font-semibold ">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* CHART */}
      <div className="relative w-full h-[75%] mt-4">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={15}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src={"/malefemale.png"}
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* BOTTUM */}

      <div className="flex justify-center gap-16 ">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#C2EBFB] rounded-full" />
          <h1 className="font-bold">1,000</h1>
          <h2 className="text-xs text-gray-400">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-yellow-300 rounded-full" />
          <h1 className="font-bold">900</h1>
          <h2 className="text-xs text-gray-400">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;

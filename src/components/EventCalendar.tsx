"use client";

import { time } from "console";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Event 1",
    time: "10:00 AM - 12:00 PM",
    description: "This is a description of Event 1.",
  },
  {
    id: 2,
    title: "Event 2",
    time: "1:00 PM - 3:00 PM",
    description: "This is a description of Event 2.",
  },
  {
    id: 3,
    title: "Event 3",
    time: "4:00 PM - 6:00 PM",
    description: "This is a description of Event 3.",
  },
  {
    id: 4,
    title: "Event 4",
    time: "7:00 PM - 9:00 PM",
    description: "This is a description of Event 4.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div>
        {events.map((event) => (
          <div key={event.id} className="p-4 border-b">
            <div className="flex items-center justify-between ">
              <h1 className="text-lg font-semibold">{event.title}</h1>
              <span className="text-sm text-gray-600">{event.time}</span>
            </div>
            <p className="text-sm text-gray-500">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;

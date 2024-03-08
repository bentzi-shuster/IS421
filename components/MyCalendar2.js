"use client"
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar/dist/react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment);

const MyCalendar2 = () => (
    <div style={{ height: 700, backgroundColor: "white"}}>
        <Calendar
            localizer={localizer}
            events={[]}
            startAccessor="start"
            endAccessor="end"
        />
    </div>
);

export default MyCalendar2;
"use client"
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar/dist/react-big-calendar';
import moment from 'moment';import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

let MyCalendar = ({events}) => {
    // Convert event dates from string to Date objects
    const convertedEvents = events.map(event => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
    }));

    const eventPropGetter = (event, start, end, isSelected) => {
        let newStyle = {
            color: 'white',
            borderRadius: "0px",
            border: "none"
        };

        // Change color based on the event's approval status
        if (event.isApproved) {
            newStyle.backgroundColor = "#006600"; // Color for approved events
        } else {
            newStyle.backgroundColor = "#efc310"; // Color for unapproved events
        }

        return {
            className: "",
            style: newStyle
        };
    };

    return (
        <div style={{ height: 700, backgroundColor: "white"}}>
            <Calendar
                localizer={localizer}
                events={convertedEvents} // Use converted events here
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                eventPropGetter={eventPropGetter}
            />
        </div>
    );
};

export default MyCalendar;

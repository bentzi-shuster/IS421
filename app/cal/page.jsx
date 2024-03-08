import React from 'react'
import MyCalendar from '../../components/MyCalendar'
import {demoEvents} from '../../config/exampleEvent'
const page = () => {
  return (
    <main>

<MyCalendar events={demoEvents}></MyCalendar>
    </main>
  )
}

export default page
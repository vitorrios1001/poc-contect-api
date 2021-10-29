import React, { useState } from 'react'
import { DateRangePicker } from 'react-dates'
import moment, { Moment } from 'moment'
import usePage from '../../../hooks/usePage'

interface DatesProps {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null; 
}

const Home = () => {
  usePage('Home')
  const [dates, setDates] = useState<DatesProps>({
    endDate: moment(),
    startDate: moment()
  })

  const [inputFocused, setInputFocused] = useState<'startDate' | 'endDate' | null>(null)

  return (
    <div>
      <h1>Home</h1>
      <br />
      <br />
      <br />
      <br />

      <DateRangePicker
        startDate={dates.startDate}
        endDate={dates.endDate}
        endDateId="endDateId"
        startDateId="startDateId"
        onDatesChange={(data) => setDates(data)}
        onFocusChange={setInputFocused}
        focusedInput={inputFocused}

        // focusedInput={dates.endDate && dates.startDate ? null : dates.startDate ? 'endDate' : 'startDate'}
      />
    </div>
  )
}

export default Home

import React, { useState } from 'react';
import { Calendar } from 'react-yearly-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // react wrapper
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // ind. comp.
import './App.css';
import './Calendar.css';
import moment from 'moment';

function MyYearlyCalendar() {

  const currentYear = new Date().getFullYear();
  const now = moment();
  const tomorrow = moment().add(1, 'day');

  // State to store the selected dates
  const [selectedDates, setSelectedDates] = useState([]);
  function newDatePicked(date) {
    setSelectedDates(prevSelectedDates => [...prevSelectedDates, date]); // get the most recent state, ... is the spread operator, creates clone of existing array + appends date
    console.log(selectedDates)
  }

  // State to store the selected dates
  const [pick, setPick] = useState(moment());
  function setPicked(date) {
    setPick(date);
    newDatePicked(date);
  }

  // Function to toggle Week Separators
  const [WeekSeparators, setWeekSeparators] = useState(false);
  const toggleWeekSeparators = () => {
    setWeekSeparators(!WeekSeparators);
  };

  // Function to toggle Date Range
  const [DateRange, setDateRange] = useState(false);
  const toggleDateRange = () => {
    setDateRange(!DateRange);
  };

  return (
    <div className="App">

      <header className="App-header"></header>

      <body className="App-body">
        
        <h1>
          <input className="event-name" type="text" placeholder="Name your event"></input>
        </h1>

        <h1>{currentYear}</h1>
        
        <Calendar 
          year={currentYear}
          showWeekSeparators={WeekSeparators}
          // selectRange={DateRange}
          // selectedRange={[now, tomorrow]}
          onPickDate={setPicked}
          selectedDay={pick}
        />

        <div className='week-separators'>
          <p>Show Week Separators</p>
          <button class="large-button" onClick={toggleWeekSeparators}>{WeekSeparators ? 'Hide' : 'Show'}</button>
        </div>

        <div className='week-separators'>
          <p>Enable Date Range</p>
          <button class="large-button" onClick={toggleDateRange}>{DateRange ? 'No' : 'Yes'}</button>
        </div>
        

      </body>
      
      <footer className="App-footer">Made with <FontAwesomeIcon icon={faHeart} /> by Aryan</footer>
    </div>
  )
}

export default MyYearlyCalendar;
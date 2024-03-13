import React, { useState } from 'react';
import { Calendar } from 'react-yearly-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // react wrapper
import { faHeart, faICursor} from '@fortawesome/free-solid-svg-icons'; // ind. comp.
import './App.css';

function MyYearlyCalendar() {

  // State to store the selected dates
  const [selectedDates, setSelectedDates] = useState([]);

  function onDatePicked(date) {
    // alert(date);
    // console.log(date._i)
    // console.log(date)
    setSelectedDates([...selectedDates, date]) // ... is the spread operator, creates clone of existing array + appends date
    console.log(selectedDates)
  }

  // Function to check if a date is selected
  const isDateSelected = (date) => {
    return selectedDates.includes(date);
  };

  // Function to apply custom style to selected dates
  const dateStyle = (date) => {
    if (isDateSelected(date)) {
      return { backgroundColor: 'orange' }; // Change the background color to orange for selected dates
    }
    return {}; // Return an empty object for other dates
  };

  const currentYear = new Date().getFullYear();

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
        onPickDate={onDatePicked}
        customClasses={{date: dateStyle}} // Apply custom styles to dates
        />

      </body>
      
      <footer className="App-footer">Made with <FontAwesomeIcon icon={faHeart} /> by Aryan</footer>
    </div>
  )
}

export default MyYearlyCalendar;
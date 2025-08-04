import React, { useState } from "react";
import { Calendar } from "react-yearly-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // react wrapper
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // ind. comp.
import "./App.css";
import "./Calendar.css";
import moment from "moment";

// #1 show all previously selected dates
// #2 unselect previous dates
// #3 range + unselects

function MyYearlyCalendar() {
  const currentYear = new Date().getFullYear();

  // Function & State for date range
  const start = moment();
  const finish = moment().add(1, "day");

  // State to store the selected dates
  const [multipleDates, setMultipleDates] = useState([]);
  function setMultiplePicked(date) {
    setMultipleDates((prevSelectedDates) => [...prevSelectedDates, date]); // get the most recent state, ... is the spread operator, creates clone of existing array + appends date
  }

  // State to store the selected dates
  const [pick, setPick] = useState(moment());
  function setPicked(date) {
    setPick(date); // last selected date
    // toggleSelection(date); // all previously selected dates
    // console.log(selectedDates)
  }

  // NEW: State for multiple date ranges
  const [selectedRanges, setSelectedRanges] = useState([]);
  function handleMultipleRanges(newRange, currentRanges) {
    setSelectedRanges([...currentRanges, newRange]);
  }

  // Remove date if already included
  // function toggleSelection(date) {
  //   let inArray = false;
  //   for (let i = 0; i < selectedDates.length; i++) {
  //     if (
  //       selectedDates[i]._i[0] === date._i[0] &&
  //       selectedDates[i]._i[1] === date._i[1] &&
  //       selectedDates[i]._i[2] === date._i[2]
  //     ) {
  //       selectedDates.splice(i, 1); // Use splice to remove the element at index i
  //       inArray = true;
  //       break; // Exit the loop once the date is found and removed
  //     }
  //   }
  //   if (!inArray) {
  //     newDatePicked(date);
  //   }
  // }

  // Function to toggle Week Separators
  const [WeekSeparators, setWeekSeparators] = useState(false);
  const toggleWeekSeparators = () => {
    setWeekSeparators(!WeekSeparators);
  };

  // Function + State to toggle Date Range
  const [toggleRange, setDateRange] = useState(false);
  const toggleDateRange = () => {
    setDateRange(!toggleRange);
  };

  // NEW: Function + State to toggle Multiple Date Ranges
  const [toggleMultipleRanges, setMultipleRanges] = useState(false);
  const toggleMultipleDateRanges = () => {
    setMultipleRanges(!toggleMultipleRanges);
  };

  // Function to check if a date is selected
  const isSelected = (date) => {
    return true;
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <body className="App-body">
        <h1>
          <input
            className="event-name"
            type="text"
            placeholder="Name your event"
          ></input>
        </h1>
        <h1>{currentYear}</h1>

        <Calendar
          year={currentYear}
          showWeekSeparators={WeekSeparators}
          onPickDate={setPicked}
          selectedDay={pick}
          // Multiple single selected dates
          onPickDates={setMultiplePicked}
          selectedDays={multipleDates}
          // NEW: Multiple date ranges
          selectMultipleRanges={toggleMultipleRanges}
          selectedRanges={selectedRanges}
          onPickRanges={handleMultipleRanges}

          // onPickRange={setRange} // implement set range.
          // selectRange={toggleRange}
          // selectedRange={[start, finish]}
        />

        <div className="week-separators">
          <p>Show Week Separators</p>
          <button class="large-button" onClick={toggleWeekSeparators}>
            {WeekSeparators ? "Hide" : "Show"}
          </button>
        </div>

        <div className="week-separators">
          <p>Enable Date Range</p>
          <button class="large-button" onClick={toggleDateRange}>
            {toggleRange ? "No" : "Yes"}
          </button>
        </div>

        {/* NEW: Multiple Date Ranges Toggle */}
        <div className="week-separators">
          <p>Enable Multiple Date Ranges</p>
          <button class="large-button" onClick={toggleMultipleDateRanges}>
            {toggleMultipleRanges ? "No" : "Yes"}
          </button>
        </div>

        {/* NEW: Display Selected Ranges */}
        {selectedRanges.length > 0 && (
          <div className="selected-ranges">
            <h3>Selected Date Ranges:</h3>
            {selectedRanges.map((range, index) => (
              <div key={index} className="range-item">
                <span>
                  {range[0].format("MMM DD, YYYY")} -{" "}
                  {range[1].format("MMM DD, YYYY")}
                </span>
                <button
                  className="remove-range"
                  onClick={() => {
                    const newRanges = selectedRanges.filter(
                      (_, i) => i !== index
                    );
                    setSelectedRanges(newRanges);
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </body>
      <footer className="App-footer">
        Made with <FontAwesomeIcon icon={faHeart} /> by Aryan
      </footer>
    </div>
  );
}

export default MyYearlyCalendar;

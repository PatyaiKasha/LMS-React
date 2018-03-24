// Core
import React from 'react';

// Instruments
import './style.scss';

const MonthName = () => <div>March</div>;
const Year = () => <div>2018_</div>;

const CalendarData = props => (
  <div className="c-calendar__month">
    <MonthName />
    <Year />
  </div>
);

export default CalendarData;

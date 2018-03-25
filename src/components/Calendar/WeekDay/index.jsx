// Core
import React from 'react';

// Components

// Instruments
import './style.scss';

const wDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const WeekDay = props => (
  <ul className="c-calendar__week-day-name">
    {wDays.map(wDay => (
      <li key={wDay} className="c-calendar__day-name">
        {wDay}
      </li>
    ))}
  </ul>
);

export default WeekDay;

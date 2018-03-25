// Core
import React from 'react';

// Components
import DayNumber from '../DayNumber';
import DayEvent from '../DayEvent';

// Instruments
import './style.scss';

const mDays = new Date();

const MonthDay = props => (
  <div className="c-calendar__day-num">
    <DayNumber />
    <DayEvent />
  </div>
);

export default MonthDay;

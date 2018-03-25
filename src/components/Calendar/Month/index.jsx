// Core
import React from 'react';

// Components
import MonthDay from '../MonthDay';
// Instruments
import './style.scss';

const Month = props => (
  <div className="c-calendar__main-inner">
    <MonthDay />
  </div>
);

export default Month;

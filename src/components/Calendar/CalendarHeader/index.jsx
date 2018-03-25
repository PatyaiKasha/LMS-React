// Core
import React from 'react';

// Components
import HeaderData from '../HeaderData';
import AddEvent from '../AddEvent';

// Instruments
import './style.scss';

const Transparent = () => <div className="c-calendar__transparent" />;

const CalendarHeader = props => (
  <div className="c-calendar__header">
    <Transparent />
    <HeaderData />
    <AddEvent />
  </div>
);

export default CalendarHeader;

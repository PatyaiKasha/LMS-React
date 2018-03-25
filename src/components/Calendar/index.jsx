// Core
import React, { Component } from 'react';

// Components
import CalendarHeader from './CalendarHeader';
import WeekDay from './WeekDay';
import Month from './Month';

// Instruments
import './style.scss';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 1,
    };
  }

  render() {
    return (
      <div className="c-calendar">
        <CalendarHeader />
        <WeekDay />
        <Month />
      </div>
    );
  }
}

export default Calendar;

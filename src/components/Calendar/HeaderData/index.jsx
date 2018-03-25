// Core
import React from 'react';

// Instruments
import './style.scss';

// Название месяца - February
const monthNames = 'April';

// const monthNames = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

const MonthName = props => <div>{props.mName}</div>;
const Year = props => <div>2018_</div>;

const HeaderData = props => (
  <div className="c-calendar__month">
    <MonthName mName="April" />
    <Year />
  </div>
);

export default HeaderData;

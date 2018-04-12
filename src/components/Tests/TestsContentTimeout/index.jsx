import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import decode from 'unescape';
import './styles.scss';
import left_arrow from '../assets/left_arrow.gif';
import right_arrow from '../assets/right_arrow.gif';
import testsData from '../testDatabase';


const TestsContentTimeout = (props) => {

  return (
  	<div className="t-content t-content--margin">
      <div className="t-results">
          <p className="t-results__marks" id="result-test">0 баллов</p>
          <p className="t-results__summ-time">не пройдено</p>
      </div>

      <div className="t-fail">
          Вы не успели пройти тест! Результат не засчитан!
      </div>

      <Link to="/tests/tasks">
        <button className="button-big">Пройти ещё раз</button>
      </Link>
  </div>
  );
}

TestsContentTimeout.PropTypes = {
  onClick: PropTypes.func
}

TestsContentTimeout.defaultProps = {
  onClick: () => {}
}

export default TestsContentTimeout;
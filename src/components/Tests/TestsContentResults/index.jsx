import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import decode from 'unescape';
import './styles.scss';
import left_arrow from '../assets/left_arrow.gif';
import right_arrow from '../assets/right_arrow.gif';


class TestsContentResults extends React.Component {

  render() {
    const { question_quan, tests_list } = this.props;

    return (
    	<div className="t-content t-content--margin">
        <div className="t-results">
            <p className="t-results__marks" id="result-test">/{question_quan} баллов</p>
            <p className="t-results__summ-time">пройдено за 14:25 минут</p>
        </div>

        <div className="t-mistakes">
            <ul className="t-mistakes__list">

              {tests_list.map((test, idx) => 
                <li className="t-mistakes__description"  key={idx + 1}>
                  <span className="t-mistakes__numbers t-mistakes__numbers-wrong">{test.id}</span>{test.correctAnswer}
                  <p className="t-mistakes__explanation">Советуем почитать тут: <span className="t-mistakes__link">[<a href="#">ссылка</a>]</span></p>
                </li>
              )}

            </ul>
        </div>

        <Link to="/tests/tasks">
          <button className="button-big">Пройти ещё раз</button>
        </Link>
    </div>
    );
  }
}

TestsContentResults.PropTypes = {
  question_quan: PropTypes.number.isRequired,
  tests_list: PropTypes.array.isRequired
}

export default TestsContentResults;
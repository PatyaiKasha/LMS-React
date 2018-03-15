import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';


class TestsContentMain extends React.Component {
  render() {
  	const { questions_number } = this.props;

    return (
    	<div className="t-content t-content--position">
    		<p className="t-content__question">[ Количество вопросов: <span className="t-content__amount">{questions_number}</span> _]</p>
  		  <p className="t-content__attempts">[ Количество попыток: <span className="t-content__amount">3</span> _]</p>
  		  <Link to="/tests/tasks">
          <button className="button-big t-btn__start">Начать тест!</button>
        </Link>
		</div>
    );
  }
}

TestsContentMain.PropTypes = {
	questions_number: PropTypes.number.isRequired
}

export default TestsContentMain;

// <Link to={`${this.props.match.path}/tasks`}>
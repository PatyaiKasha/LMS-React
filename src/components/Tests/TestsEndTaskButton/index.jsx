import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';


const TestsEndTaskButton = ({onClick}) => (
	<Link to="/tests/results">
		<button className="button-big t-btn__finish" onClick={onClick} >Завершить тест!</button>
	</Link>
);

TestsEndTaskButton.PropTypes = {
	onClick: PropTypes.func
};

TestsEndTaskButton.defaulrProps = {
	onClick: () => {}
}

export default TestsEndTaskButton;
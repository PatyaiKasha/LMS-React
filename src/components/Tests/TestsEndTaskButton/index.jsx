import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';


const TestsEndTaskButton = () => (
	<Link to="/tests/results">
		<button className="button-big t-btn__finish" id="end_test">Завершить тест!</button>
	</Link>
);

export default TestsEndTaskButton;
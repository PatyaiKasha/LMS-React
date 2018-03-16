import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import right_arrow from '../assets/right_arrow.gif';


const TestsGoToHMButton = () => (
	<Link to="/theory" className="t-control">
	    <span className="t-control__word">Дальше к ДЗ</span>
        <img className="t-control__arrow" src={right_arrow} alt="right_arrow"/>
	</Link>
);

export default TestsGoToHMButton;
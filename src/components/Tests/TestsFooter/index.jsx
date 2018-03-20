import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import left_arrow from '../assets/left_arrow.gif';


const TestsFooter = ({children}) => {
    return (
    	<div className="t-footer">
		    	<Link to="/theory" className="t-control">
			        <img className="t-control__arrow" src={left_arrow} alt="left_arrow" />
			        <span className="t-control__word">Вернуться к теории</span>
			    </Link>
		    {children}
		</div>
    );
}

export default TestsFooter;
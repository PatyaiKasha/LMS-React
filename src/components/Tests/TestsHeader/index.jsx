import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import clockPic from '../assets/clock.png';


class TestsHeader extends React.Component {
  render() {
  	const { theme_number, theme_title } = this.props;

    return (
    	<div className="t-header">
		    <div className="t-title">  
		        <h1 className="t-title__subtitle">Тесты</h1>
		        <h2 className="t-title__number">{theme_number}</h2>
		    </div>
		    <div className="t-theme">
		        <h2 className="t-theme__name">{theme_title}</h2>
		    </div>
		    <div className="t-timer">
		        <p className="t-timer__time">{this.props.children}</p>
		        <img className="t-timer__clock" src={clockPic} alt="clock-img"/>
		    </div>
		</div>
    );
  }
}

TestsHeader.PropTypes = {
	theme_number: PropTypes.string.isRequired,
	theme_title: PropTypes.string.isRequired
}

export default TestsHeader;
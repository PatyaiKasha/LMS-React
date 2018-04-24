import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import TestsHeader from '../TestsHeader';
import TestsContentTimeout from '../TestsContentTimeout';
import TestsFooter from '../TestsFooter';
import TestsTimer from '../TestsTimer';
import TestsGoToHWButton from '../TestsGoToHWButton';
import testsData from '../testDatabase';


export default class TimeoutPageResults extends React.Component {
  render() {
    return (
	    <div className='t-main-tests'>
	        <TestsHeader theme_number={testsData.theme_number} theme_title={testsData.theme_title} >
                <span className="t-main-span">
                    <span className="t-timer__minutes">00</span>: <span className="t-timer__seconds">00</span>
                </span>
            </TestsHeader>
            <TestsContentTimeout />
            <TestsFooter>
            <TestsGoToHWButton />
            </TestsFooter>
	    </div>
    );
  }
}

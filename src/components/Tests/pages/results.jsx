import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import TestsHeader from '../TestsHeader';
import TestsContentResults from '../TestsContentResults';
import TestsFooter from '../TestsFooter';
import TestsTimer from '../TestsTimer';
import TestsGoToHWButton from '../TestsGoToHWButton';
import testsData from '../testDatabase';


export default class TasksPageResults extends React.Component {
  static PropTypes = {
    prepared_variants: PropTypes.array,
    resetTimer: PropTypes.func
  };

  render() {
    const { showMinutes, showSeconds } = this.props;

    return (
	    <div className='t-main-tests'>
	    	<TestsHeader theme_number={testsData.theme_number} theme_title={testsData.theme_title} >
          <span className="t-main-span">
            <span className="t-timer__minutes">{showMinutes}</span>: <span className="t-timer__seconds">{showSeconds}</span>
          </span>
        </TestsHeader>
        <TestsContentResults question_quan={testsData.theme_tests.length} tests_list={testsData.theme_tests} prepared_variants={this.props.prepared_variants} onClick={()=> {this.props.resetTimer();}} showMinutes={showMinutes} showSeconds={showSeconds} />
        <TestsFooter>
          <TestsGoToHWButton />
        </TestsFooter>
	    </div>
    );
  }
}

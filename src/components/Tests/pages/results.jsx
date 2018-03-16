import React from 'react';
import './styles.scss';
import TestsHeader from '../TestsHeader';
import TestsContentResults from '../TestsContentResults';
import TestsFooter from '../TestsFooter';
import TestsTimer from '../TestsTimer';
import TestsGoToHWButton from '../TestsGoToHWButton';
import testsData from '../testDatabase';


export default class TasksPageResults extends React.Component {
  render() {
    return (
	    <div className='t-main-tests'>
	    	<TestsHeader theme_number={testsData.theme_number} theme_title={testsData.theme_title} >
          <TestsTimer />
        </TestsHeader>
        <TestsContentResults question_quan={testsData.theme_tests.length} tests_list={testsData.theme_tests} />
        <TestsFooter>
          <TestsGoToHWButton />
        </TestsFooter>
	    </div>
    );
  }
}
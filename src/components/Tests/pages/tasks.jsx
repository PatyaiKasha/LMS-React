import React from 'react';
import './styles.scss';
import TestsHeader from '../TestsHeader';
import TestsContentTasks from '../TestsContentTasks';
import TestsFooter from '../TestsFooter';
import TestsTimer from '../TestsTimer';
import TestsEndTaskButton from '../TestsEndTaskButton';
import testsData from '../testDatabase';


export default class TasksPageTests extends React.Component {
  render() {
    return (
	    <div className='t-main-tests'>
	    	<TestsHeader theme_number={testsData.theme_number} theme_title={testsData.theme_title} >
          <TestsTimer />
        </TestsHeader>
        <TestsContentTasks question_quan={testsData.theme_tests.length} tests_list={testsData.theme_tests} />
        <TestsFooter>
          <TestsEndTaskButton />
        </TestsFooter>
	    </div>
    );
  }
}
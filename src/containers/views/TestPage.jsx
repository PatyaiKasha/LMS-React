
import React from 'react';
import TestsHeader from '@/components/Tests/TestsHeader';
import TestsContentMain from '@/components/Tests/TestsContentMain';
import TestsFooter from '@/components/Tests/TestsFooter';
import testsData from '@/components/Tests/testDatabase';


export default class MainPageTests extends React.Component {
  render() {
    return (
	    <div className='t-main-tests'>
	    	<TestsHeader theme_number={testsData.theme_number} theme_title={testsData.theme_title} >
	    		{testsData.theme_time} <br/>на прохождение
	    	</TestsHeader>
    		<TestsContentMain questions_number={testsData.theme_tests.length } />
    		<TestsFooter />
	    </div>
    );
  }
}

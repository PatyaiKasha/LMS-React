import React from 'react';
import './styles.scss';
import TestsHeader from '../TestsHeader';
import TestsContentMain from '../TestsContentMain';
import TestsFooter from '../TestsFooter';
import testsData from '../testDatabase';


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
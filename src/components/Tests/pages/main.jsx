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
	    		<span className="t-main-span">{testsData.theme_time.theme_minutes}:{testsData.theme_time.theme_seconds} <br/>на прохождение</span>
	    	</TestsHeader>
    		<TestsContentMain questions_number={testsData.theme_tests.length } />
    		<TestsFooter />
	    </div>
    );
  }
}
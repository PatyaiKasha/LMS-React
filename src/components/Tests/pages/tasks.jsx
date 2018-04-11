import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import TestsHeader from '../TestsHeader';
import TestsContentTasks from '../TestsContentTasks';
import TestsFooter from '../TestsFooter';
import TestsTimer from '../TestsTimer';
import TestsEndTaskButton from '../TestsEndTaskButton';
import testsData from '../testDatabase';


export default class TasksPageTests extends React.Component {
  static PropTypes = {
    sended_variants: PropTypes.func.isRequired
  };

  state = {
    userTestAnswers: []
  };


  onSubmitVariants = (tests) => {
    this.setState({
      userTestAnswers: tests
    });
  };


  render() {
    return (
	    <div className='t-main-tests'>
	    	<TestsHeader theme_number={testsData.theme_number} theme_title={testsData.theme_title} >
          <TestsTimer stopInterval={this.props.stopInterval} />
        </TestsHeader>
        <TestsContentTasks question_quan={testsData.theme_tests.length} tests_list={testsData.theme_tests} selected_variants={this.onSubmitVariants} />
        <TestsFooter>
          <TestsEndTaskButton onClick={() => {this.props.sended_variants(this.state.userTestAnswers);}} />
        </TestsFooter>
	    </div>
    );
  }
}
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import TestsHeader from '../TestsHeader';
import TestsContentTasks from '../TestsContentTasks';
import TestsFooter from '../TestsFooter';
import TestsEndTaskButton from '../TestsEndTaskButton';
import testsData from '../testDatabase';


export default class TasksPageTests extends React.Component {
  static PropTypes = {
    sended_variants: PropTypes.func.isRequired
  };

  state = {
    userTestAnswers: [],
    timerMinutes: testsData.theme_minutes,
    timerSeconds: testsData.theme_seconds,
    endInterval: this.props.stopInterval
  };

  componentDidMount() {
    this.testsInterval = setInterval(this.tick, 100);
  }

  componentWillUnmount () {
    clearInterval(this.testsInterval);
  }

  tick = () => {
    if (this.state.endInterval) {
      clearInterval(this.testsInterval);
    }
    else {
      let minute = this.state.timerMinutes;
      let second = this.state.timerSeconds;

      if ( second > 0 ) {
        second--;
        let secondResult = (second < 10 ) ? `0${second}` : `${second}`;
        this.setState({
          timerSeconds: secondResult
        });
      }
      else {
        second = 59;
        let secondResult = (second < 10 ) ? `0${second}` : `${second}`;
        this.setState({
          timerSeconds: secondResult
        });

        if ( minute > 0 ) {
          minute--;
          let minuteResult = (minute < 10 ) ? `0${minute}` : `${minute}`;;
          this.setState({
            timerMinutes: minuteResult
          }); 
        }
        else {
          this.setState({
            timerSeconds: '00'
          });
          this.setState({
            endInterval: true
          });
        }
      }
    } 
  }

  onSubmitVariants = (tests) => {
    this.setState({
      userTestAnswers: tests
    });
  };


  render() {
    const { timerMinutes, timerSeconds } = this.state;
    return (
	    <div className='t-main-tests'>
	    	<TestsHeader theme_number={testsData.theme_number} theme_title={testsData.theme_title} >
          <span className="t-main-span">
            <span className="t-timer__minutes">{timerMinutes}</span>: <span className="t-timer__seconds">{timerSeconds}</span>
          </span>
        </TestsHeader>
        <TestsContentTasks question_quan={testsData.theme_tests.length} tests_list={testsData.theme_tests} selected_variants={this.onSubmitVariants} />
        <TestsFooter>
          <TestsEndTaskButton onClick={() => {this.props.sended_variants(this.state.userTestAnswers, this.state.timerSeconds, this.state.timerMinutes);}} />
        </TestsFooter>
	    </div>
    );
  }
}
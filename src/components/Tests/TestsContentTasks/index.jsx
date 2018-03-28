import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import decode from 'unescape';
import './styles.scss';
import left_arrow from '../assets/left_arrow.gif';
import right_arrow from '../assets/right_arrow.gif';


class TestsContentTasks extends React.Component {
  state = {
    quest_num: 1,
    inputTestVariant: this.props.tests_list.map(test => '')
  };

  _prevTest = (evt) => {
    if (this.state.quest_num > 1) {
      this.setState((prevState) => {
        return {
          quest_num: prevState.quest_num - 1
        }
      })
    }
  };

  _nextTest = (evt) => {
    if (this.state.quest_num < this.props.question_quan) {
      this.setState((prevState) => {
        return {
          quest_num: prevState.quest_num + 1
        }
      })
    }
  };

  _chooseTest = (evt) => {
    this.setState({
      quest_num: evt.target.innerText
    })
  };


  _handleInputChooseAnswer = (evt) => {
    const value = evt.target.value;

    const inputTestVariant = this.state.inputTestVariant;
    inputTestVariant[evt.target.name] = evt.target.value;
    this.setState({
      inputTestVariant: inputTestVariant 
    })

    this.props.selected_variants(this.state.inputTestVariant);
  };

  render() {
    console.log(this.state.inputTestVariant);
    const { question_quan, tests_list } = this.props;
  	const { quest_num, inputTestVariant } = this.state;

    const test_index = quest_num -1;

    return (
    	<div className="t-content t-content--withmargin">
        <div className="t-question">
          <h2 className="t-question__point">Вопрос {quest_num}/{question_quan}</h2>
          <h3 className="t-question__task">{tests_list[test_index].title}</h3> 
        </div>

        <ul className="t-answers">
          {tests_list[test_index].answers.map((test, idx) => 
            <li className="t-answers__choice" key={idx}>
              <label className="t-answers__label" htmlFor={`test${idx+1}`}>
                <input className="t-answers__item" name={test_index} id={`test${idx+1}`} type="radio" value={test} checked={test == inputTestVariant[test_index]} onClick={this._handleInputChooseAnswer} />
                <span className="t-checkbox-custom"></span>
                <span className="t-label">{test}</span>
              </label>
            </li>           
          )}
        </ul>

        <div className="t-navigation">
          <div className="t-navigation__arrows">
            <span className="t-navigation__prev" onClick={this._prevTest}> {decode('&lt;')} </span>
            <span className="t-navigation__next" onClick={this._nextTest}> {decode('&gt;')} </span>
          </div>
          <ul className="t-navigation__pagination">
            <li className="t-navigation__number t-navigation__number--arrow" onClick={this._prevTest}><img src={left_arrow} alt="left_arrow" /></li>
            {tests_list.map((test, idx) => {
              if (idx === test_index) {
                return (
                  <li className="t-navigation__number t-navigation__number--blue" key={idx + 1} onClick={this._chooseTest} >{idx + 1}</li>
                );
              }
              else {
                return (
                  <li className="t-navigation__number" key={idx + 1} onClick={this._chooseTest} >{idx + 1}</li>
                );
              }
            }
            )}
            <li className="t-navigation__number t-navigation__number--arrow" onClick={this._nextTest}><img src={right_arrow} alt="right_arrow" /></li>
          </ul>
        </div>
		</div>
    );
  }
}

TestsContentTasks.PropTypes = {
  question_quan: PropTypes.number.isRequired,
  tests_list: PropTypes.array.isRequired
}

export default TestsContentTasks;
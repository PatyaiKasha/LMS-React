import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '@/components/Tests/pages/main';
import TasksPage from '@/components/Tests/pages/tasks';
import ResultsPage from '@/components/Tests/pages/results';
import TimeoutPage from '@/components/Tests/pages/timerout';


export default class Tests extends React.Component {
  state = {
	    readyUserTestAnswers: [],
	    stopInterval: false,
	    showSeconds: '',
	    showMinutes: ''
	};

	prepareToChecking = (prepared, seconds, minutes) => {
		this.setState({
	    	readyUserTestAnswers: prepared
	    });
	    this.setState({
	    	stopInterval: true
	    });
	    this.setState({
	    	showSeconds: seconds
	    });
	    this.setState({
	    	showMinutes: minutes
	    });
	};

	resetTimer = () => {
		this.setState({
	    	stopInterval: false
	    });
	};


  	render() {
	    return (
	    	<Switch>
		        <Route exact path={`${this.props.match.path}/`} render={() => <MainPage />} />
		        <Route path={`${this.props.match.path}/tasks`} render={() => <TasksPage sended_variants={this.prepareToChecking} stopInterval={this.state.stopInterval} />} />
		        <Route path={`${this.props.match.path}/results`} render={() => <ResultsPage prepared_variants={this.state.readyUserTestAnswers} stopInterval={this.state.stopInterval} resetTimer={this.resetTimer} showSeconds={this.state.showSeconds} showMinutes={this.state.showMinutes} />} />
		        <Route path={`${this.props.match.path}/timeout`} render={() => <TimeoutPage />} />
	    	</Switch>
	    );
  	}
}

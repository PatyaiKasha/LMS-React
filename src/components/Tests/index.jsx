import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/main';
import TasksPage from './pages/tasks';
import ResultsPage from './pages/results';


export default class Tests extends React.Component {
	state = {
	    readyUserTestAnswers: [],
	    stopInterval: false
	};

	prepareToChecking = (prepared) => {
		this.setState({
	    	readyUserTestAnswers: prepared
	    });
	    this.setState({
	    	stopInterval: true
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
		        <Route path={`${this.props.match.path}/results`} render={() => <ResultsPage prepared_variants={this.state.readyUserTestAnswers} stopInterval={this.state.stopInterval} resetTimer={this.resetTimer} />} />
	    	</Switch>
	    );
  	}
}

// <Switch>
//     <Route exact path={`${this.props.match.path}/`} component={MainPage} />
//     <Route path={`${this.props.match.path}/tasks`} component={TasksPage} />
//     <Route path={`${this.props.match.path}/results`} component={ResultsPage} />
// </Switch>
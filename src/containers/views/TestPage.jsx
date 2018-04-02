import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '@/components/Tests/pages/main';
import TasksPage from '@/components/Tests/pages/tasks';
import ResultsPage from '@/components/Tests/pages/results';


export default class Tests extends React.Component {
  state = {
      readyUserTestAnswers: []
  };

  prepareToChecking = (prepared) => {
    this.setState({
        readyUserTestAnswers: prepared
      }) 
  };

    render() {
      return (
        <Switch>
            <Route exact path={`${this.props.match.path}/`} render={() => <MainPage />} />
            <Route path={`${this.props.match.path}/tasks`} render={() => <TasksPage sended_variants={this.prepareToChecking} />} />
            <Route path={`${this.props.match.path}/results`} render={() => <ResultsPage prepared_variants={this.state.readyUserTestAnswers} />} />
        </Switch>
      );
    }
}
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/main';
import TasksPage from './pages/tasks';


export default class Tests extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={`${this.props.match.path}/`} component={MainPage} />
        <Route path={`${this.props.match.path}/tasks`} component={TasksPage} />
      </Switch>
    );
  }
}
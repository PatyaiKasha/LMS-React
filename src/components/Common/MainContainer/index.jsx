import React from 'react';
import routes from '@/routes';
//import { Route } from 'react-router-dom';
import LeftNav from '@/components/Common/LeftNav';
import Tests from '@/components/Tests';


import './styles.scss';

export default class MainContainer extends React.Component {
  render() {
    return (
      <div className="wrapper wrapper--light-gray">
        <div className="container">
          <div className="content">
            <LeftNav />
            <main className="main">
              {routes}
              {/* <Route path="/tests" component={Tests} /> */}
            </main>
          </div>
        </div>
      </div>
    );
  }
}

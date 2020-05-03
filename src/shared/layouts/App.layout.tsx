import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainNav from '../components/MainNav/MainNav';

const AppLayout = ({ component: Component, ...rest }: { component: FunctionComponent<any> }) => (
  <Router>
    <Route {...rest} render={matchProps => (
      <div className="AppLayout">
        <MainNav />
        <div className="container-fluid">
          <div className="row">
            <Component className="col" {...matchProps} />
          </div>
        </div>
      </div>
    )} />
  </Router>
);

export default AppLayout;
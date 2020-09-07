import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import './index.css';
import routes from '../routes';

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <div className="container-main">
        <Switch>
          {routes.map((route, idx) => (route.component ? (
            <Route
              key={String(idx)}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={(renderProps: any) => (
                <route.component {...renderProps} />
              )}
            />
          ) : null))}
        </Switch>
      </div>
    </div>
  );
}

export default DefaultLayout;

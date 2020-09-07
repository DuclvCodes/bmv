import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import "antd/dist/antd.css";

const DefaultLayout = React.lazy(() => import('./layouts'));

const loading = (
  <div style={{
    height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
  }}
  >
    <Spin size="large" />
  </div>
);

const App = () => {
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              path="/"
              render={(props: any) => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'; 
// import { createBrowserHistory as history } from 'react-router-dom';

import App from './components/App';
import './css/index.css';
import Layout from './components/Layout';

const Root = () => {
  return (
    // <Match> and <Miss> were components in the alpha release of React Router v4.
    // In the beta, <Match> has been renamed <Route> (and its props have changed so that
    // pattern is now path and exactly is exact). The <Miss> component was removed entirely.
    // Instead you should use a <Switch> statement, which will only render the first <Route>
    // (or <Redirect>) that is matched. You can add a pathless component as the last child of the
    // <Switch>'s routes and it will render when none of the preceding <Route>s match.
    // You can check out the API documentation for more details.
    // https://reacttraining.com/react-router/
    <Router>
      <Layout>
        <App />
      </Layout>
    </Router>
  )
}

render( <Root />, document.querySelector('#main') );
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
// import { createBrowserHistory as history } from 'react-router-dom';

// Imported Components
import WelcomeChef from './components/WelcomeChef';
import App from './components/App';
import NotFound from './components/NotFound';

import './css/index.css';

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
      <div>
        <Switch>
          <Route exact path="/" component={WelcomeChef}/>
            <Route path="/CookBook/:bookId" component={App}/>
              
            {/* All other routes */}
            <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    </Router>
  )
}

render( <Root />, document.querySelector('#main') );
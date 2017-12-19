import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router'; 

// Imported Components
import App from './components/App';
import WelcomeChef from './components/WelcomeChef';
import NotFound from './components/NotFound'

import './css/index.css';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={WelcomeChef}/>
        <Match pattern="/CookBook/:bookId" component={App}/>
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}

render( <Root />, document.querySelector('#main') );
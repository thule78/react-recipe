import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App';
import Recipe from './Recipe';

const Nav = () => {
  return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/recipe/:id" component={Recipe}/>
        </Switch>
      </BrowserRouter>
    </div>
    )
}

export default Nav

import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

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

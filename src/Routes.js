import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import NewNote from './containers/NewNote';

export default() =>
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/login" exact component={Login}/>
    <Route component={NewNote}/>
    <Route component ={NotFound}/>

  </Switch>;

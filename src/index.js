import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/';
import SigninPage from './pages/signin';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SigninPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);


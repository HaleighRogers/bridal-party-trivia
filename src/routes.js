import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import TitlePage from './components/TitlePage';
import GamePage from './components/GamePage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={TitlePage}/>
    <Route path ="/game" component={GamePage}/>
  </Route>
);

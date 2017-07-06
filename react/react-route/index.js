import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory} from 'react-router';
import Home from './modules/routes';

render(
  <Router history={browserHistory}/>,document.getElementById('app')
);
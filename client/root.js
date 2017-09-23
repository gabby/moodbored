import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import Index from './';
import './index.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider >
    <Index />
  </MuiThemeProvider>
);

ReactDOM.render(
  <div>
    <Router>
      <App />
    </Router>
  </div>,
  document.getElementById("app")
);


import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import Root from './root';
import './index.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider >
    <Root />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router>
        <App />
      </Router>
    </div>
  </Provider>,
  document.getElementById("app")
);


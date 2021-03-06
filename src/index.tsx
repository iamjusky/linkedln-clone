import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { store } from './app/store';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

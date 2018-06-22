import "babel-polyfill";
import './styles/main.scss';
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers/index';
import { BrowserRouter as Router, Route, HashRouter  } from 'react-router-dom';
import App from './components/App';

//let store = createStore(reducers);
ReactDOM.render(
 <Provider>
      <Router>
          <div>
            <HashRouter>
              <App />
            </HashRouter>
          </div>
      </Router>
   </Provider>,
  document.getElementById('app')
);
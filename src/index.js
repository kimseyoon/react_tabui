import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Tab from './components/tab/Tab';
import tabApp from './reducers';

const store = createStore(tabApp);

const wrap = document.querySelector(".wrap");
ReactDOM.render(
  <Provider store = {store}>
    <Tab/>
  </Provider>,
  wrap
)

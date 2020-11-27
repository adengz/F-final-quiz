import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';

const store = createStore(reducers, applyMiddleware(thunk, logger));

const App = () => (
  <Provider store={store}>
    <div>Hello World</div>
  </Provider>
);

export default App;

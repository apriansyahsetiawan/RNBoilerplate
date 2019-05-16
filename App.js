/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducers from './src/redux/reducers/index';
import AppNavigator from './src/navigations/AppNavigator';

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk, logger),
    autoRehydrate()
  )
);

persistStore(store, { storage: AsyncStorage });
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

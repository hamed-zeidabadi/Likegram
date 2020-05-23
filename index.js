/**
 * @format
 */

import {AppRegistry, I18nManager} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './Redux/Store';

I18nManager.allowRTL(false);

const Container = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Container);

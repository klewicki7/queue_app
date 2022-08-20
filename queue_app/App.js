/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './root/screens/HomeScreen';
import store from './root/store';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <HomeScreen />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;

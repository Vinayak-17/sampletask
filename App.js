/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import  AppRoute from './router/router';
import UserActivity from './pages/userActivity/userActivity';
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();
function App()  {
  return (
    <Provider store={store}>
       <AppRoute/>
       </Provider>
  );
};

export default App;

import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import RootStack  from './src/Navigator/Nav';

export default class App extends Component {
  render() {
    console.log('看一下store',store);
    return (
      <Provider store={store}> 
        <RootStack />
      </Provider>
    );
  }
}
